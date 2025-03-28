// movies-series-about.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Show {
  id: number;
  title: string;
  description: string;
  category: string[] | string;
  type: string;
  image_url: string;
  rating?: number;
  rating_count?: number;
}

interface ApiResponse {
  status: string;
  data: {
    show: Show;
  };
}

@Component({
  selector: 'app-movies-series-about',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './movies-series-about.component.html',
  styleUrls: ['./movies-series-about.component.css']
})
export class MoviesSeriesAboutComponent implements OnInit {
  movieId!: number;
  show!: Show;
  error: string | null = null;
  isLoading: boolean = true;
  
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieId = Number(params.get('id')); 
      console.log('Kapott ID:', this.movieId);
    });
    this.fetchShowDetails();
  }

  getCategoryArray(category: string[] | string): string[] {
    if (Array.isArray(category)) {
      return category;
    } else if (typeof category === 'string') {
      try {
        // Próbáljuk meg JSON-ként értelmezni, ha string
        const parsed = JSON.parse(category);
        return Array.isArray(parsed) ? parsed : [category];
      } catch (e) {
        // Ha nem sikerül JSON-ként értelmezni, akkor egyszerű string
        return [category];
      }
    }
    return [];
  }

  fetchShowDetails() {
    this.isLoading = true;
    this.error = null;
    
    this.http.get<ApiResponse>(`https://egyedirobi.moriczcloud.hu/vizsga-api/selected-show/${this.movieId}`, {
      withCredentials: true
    })
    .subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.show = response.data.show;
          
          // Kategóriák feldolgozása, ha szükséges
          this.show.category = this.getCategoryArray(this.show.category);
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching show details:', err);
        this.error = 'Nem sikerült betölteni a film vagy sorozat részleteit. Kérjük, próbálja újra később.';
        this.isLoading = false;
      }
    });
  }
}