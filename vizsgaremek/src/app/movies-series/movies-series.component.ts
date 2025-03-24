import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Show {
  id: number;
  title: string;
  description: string;
  category: string[] | string;
  type: string;
  image_url: string;
}

interface ApiResponse {
  status: string;
  data: {
    user: any;
    shows: Show[];
  };
}

@Component({
  selector: 'app-movies-series',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies-series.component.html',
  styleUrls: ['./movies-series.component.css']
})
export class MoviesSeriesComponent implements OnInit {
  shows: Show[] = [];
  isLoading: boolean = true;
  error: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.fetchShows();
  }
  
  showDetails($id: number) {
    this.router.navigate(['/movies-series-about', $id]);
  }

  fetchShows() {
    this.isLoading = true;
    this.error = null;

    this.http.get<ApiResponse>('https://egyedirobi.moriczcloud.hu/vizsga-api/dashboard', {
      withCredentials: true
    })
    .subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.shows = response.data.shows;
          // Kategóriák feldolgozása
          this.processShowCategories();
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching shows:', err);
        this.error = 'Nem sikerült betölteni a filmeket és sorozatokat. Kérjük, próbálja újra később.';
        this.isLoading = false;
      }
    });
  }

  // Segédfüggvények a kategóriák kezeléséhez
  isArray(obj: any): boolean {
    return Array.isArray(obj);
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

  // Kategóriák feldolgozása minden show-hoz
  processShowCategories() {
    this.shows.forEach(show => {
      if (typeof show.category === 'string' && show.category) {
        try {
          const parsed = JSON.parse(show.category);
          show.category = Array.isArray(parsed) ? parsed : [show.category];
        } catch (e) {
          // Ha nem sikerül JSON-ként értelmezni, hagyjuk stringként
        }
      } else if (!show.category) {
        show.category = [];
      }
    });
  }
}
