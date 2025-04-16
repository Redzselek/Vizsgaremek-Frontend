// movies-series-about.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


interface Show {
  id: number;
  title: string;
  description: string;
  category: number[];
  type: string;
  image_url: string;
  rating?: number;
  user_rating?: number;
  comments: any[];
  date: string;
  user_id: number;
  season: number;
  episode: number;
}

@Component({
  selector: 'app-movies-series-about',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './movies-series-about.component.html',
  styleUrls: ['./movies-series-about.component.css']
})
export class MoviesSeriesAboutComponent implements OnInit {
  selectedShow: Show = {
    id: 0,
    title: '',
    description: '',
    category: [],
    type: '',
    image_url: '',
    rating: 0,
    user_rating: 0,
    comments: [],
    date: '',
    user_id: 0,
    season: 0,
    episode: 0
  };
  isLoading: boolean = true;
  error: string | null = null;
  watchlisted: boolean = false;
  editing: boolean = false;
  editing_id: number = 0;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadShowDetails(id);
    });
  }


  loadShowDetails(id: number): void {
    this.getCategories();
    this.isLoading = true;
    this.error = null;

    this.http.get<any>(`https://egyedirobi.moriczcloud.hu/vizsga-api/selected-show/${id}`)
      .subscribe({
        next: (response) => {
          if (response) {
            const showData = { ...response };
            if (typeof showData.category === 'string') {
              showData.category = JSON.parse(showData.category);
            }
            this.selectedShow = showData;
            console.log(this.selectedShow.episode);

            this.avgRating(id);
            this.isWatchlisted(id);
            this.getComments(id);
          }
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching show details:', err);
          this.error = 'Nem sikerült betölteni a műsor részleteit. Kérjük, próbálja újra később.';
          this.isLoading = false;
        }
      });
  }

  avgRating(id: number): void {
    this.http.get<any>('https://egyedirobi.moriczcloud.hu/vizsga-api/avg-rating/' + id)
      .subscribe({
        next: (response) => {
          if (response) {
            const showData = { ...response };
            this.selectedShow.rating = showData.average_rating;
            this.selectedShow.user_rating = showData.user_rating
            const ratingStars = document.querySelectorAll('.fa-star');
            ratingStars.forEach((stars, index) => {
              if (index < showData.user_rating) {
                stars.classList.remove('far')
                stars.classList.add('fas');
              } else {
                stars.classList.remove('fas')
                stars.classList.add('far');
              }
            });
          }
        },
        error: (err) => {
          console.error('Error fetching show details:', err);
        }
      });
  }

  rateShow(rating: number): void {
    const id = this.selectedShow.id
    this.selectedShow.user_rating = rating
    this.http.post(`https://egyedirobi.moriczcloud.hu/vizsga-api/add-rating?show_id=${id}&rating=${rating}`, {}).subscribe({
      next: () => {
        this.avgRating(id);
        const ratingStars = document.querySelectorAll('.fa-star');
        ratingStars.forEach((stars, index) => {
          if (index < rating) {
            stars.classList.remove('far')
            stars.classList.add('fas');
          } else {
            stars.classList.remove('fas')
            stars.classList.add('far');
          }
        });
      },
      error: (error) => {
        console.error('Error submitting rating:', error);
      }
    });
  }

  addToWatchlist() {
    this.http.post(`https://egyedirobi.moriczcloud.hu/vizsga-api/add-watchlist/${this.selectedShow.id}`, {}).subscribe({
      next: () => {
        this.isWatchlisted(this.selectedShow.id);
      },
      error: (error) => {
        console.error('Error adding show to watchlist:', error);
      }
    })
  }
  isWatchlisted(id: number): void {
    this.http.post<any>(`https://egyedirobi.moriczcloud.hu/vizsga-api/get-watchlist`, {}).subscribe({
      next: (value) => {
        const watchlistData = { ...value };
        for (let i = 0; i < watchlistData.data.length; i++) {
          if (id == watchlistData.data[i].show_id) {
            var element = document.getElementById("watchlist_btn");
            element!.style.backgroundColor = "rgba(169, 145, 212, 1)";
            element!.style.color = "black"
            element!.innerHTML = '<i class="bi bi-dash-circle me-2"></i> Remove from Watchlist';
            this.watchlisted = true
          } else {
            var element = document.getElementById("watchlist_btn");
            element!.style.backgroundColor = "rgba(23, 20, 31, 1)";
            element!.style.color = "white"
            element!.innerHTML = '<i class="bi bi-plus-circle me-2"></i> Add to Watchlist';
            this.watchlisted = false
          }
        }
      },
    })
  }
  removeFromWatchlist(): void {
    this.http.post(`https://egyedirobi.moriczcloud.hu/vizsga-api/remove-watchlist/${this.selectedShow.id}`, {}).subscribe({
      next: () => {
        this.isWatchlisted(this.selectedShow.id);
      },
      error: (error) => {
        console.error('Error removing show from watchlist:', error);
      }
    })
  }
  getComments(id: number): void {
    this.http.post<any>(`https://egyedirobi.moriczcloud.hu/vizsga-api/get-show-comments?show_id=${id}`, {}).subscribe({
      next: (value) => {
        const commentsData = { ...value };
        this.selectedShow.comments = [];
        this.selectedShow.comments = Object.values(commentsData);
      },
      error: (error) => {
        console.error('Error getting comments:', error);
      }
    })
  }
  createComment(): void {
    const id = this.selectedShow.id
    const comment = (document.getElementById('comment-input') as HTMLInputElement).value;
    this.http.post(`https://egyedirobi.moriczcloud.hu/vizsga-api/create-comment?show_id=${id}&comment=${comment}`, {}).subscribe({
      next: () => {
        (document.getElementById('comment-input') as HTMLInputElement).value = '';
        this.getComments(id);
      },
      error: (error) => {
        console.error('Error adding comment:', error);
      }
    });
  }
  deleteComment(id: number): void {
    this.http.post(`https://egyedirobi.moriczcloud.hu/vizsga-api/delete-comment?id=${id}`, {}).subscribe({
      next: () => {
        this.getComments(this.selectedShow.id);
      },
      error: (error) => {
        console.error('Error deleting comment:', error);
      }
    })
  }

  updateComment(): void {
    const id = this.editing_id;
    const comment_input = document.getElementById('edit-comment') as HTMLInputElement;
    this.http.post(`https://egyedirobi.moriczcloud.hu/vizsga-api/update-comment?id=${id}&comment=${comment_input.value}`, {}).subscribe({
      next: () => {
        this.getComments(this.selectedShow.id);
        this.editing = false;
      },
      error: (error) => {
        console.error('Error editing comment:', error);
      }
    });
  }

  editComment(id: number): void {
    this.editing = true;
    this.editing_id = id;
  }

  predefinedCategories: any[] = [];
  getCategories() {
    this.http.get('https://egyedirobi.moriczcloud.hu/vizsga-api/get-categories').subscribe({
      next: (response: any) => {
        this.predefinedCategories = response;
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
      }
    });
  }

  getCategoryArray(categoryIds: number[]): string[] {
    if (!categoryIds) {
      return [];
    }
    return categoryIds.map(id => this.predefinedCategories.find(cat => cat.id === id)?.category);
  }
}
