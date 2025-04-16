import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Show {
  id: number | null;
  title: string;
  description: string;
  category: number[];
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

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.fetchShows();
  }

  showDetails($id: number) {
    this.router.navigate(['/movies-series-about', $id]);
  }

  fetchShows() {
    this.getCategories();
    this.isLoading = true;
    this.error = null;

    this.http.get<ApiResponse>('https://egyedirobi.moriczcloud.hu/vizsga-api/dashboard', {
      withCredentials: true
    })
      .subscribe({
        next: (response) => {
          if (response.status === 'success') {
            const shows = response.data.shows;
            this.shows = shows;
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

  getCategoryArray(categoryIds: number[] | string): string[] {
    if (!categoryIds) {
      return [];
    }
    if (typeof categoryIds === 'string') {
      try {
        categoryIds = JSON.parse(categoryIds);
      } catch (e) {
        console.error('Error parsing categoryIds:', e);
        return [];
      }
    }
    if (!Array.isArray(categoryIds)) {
      console.error('categoryIds is not an array:', categoryIds);
      return [];
    }
    return categoryIds.map(id => this.predefinedCategories.find(cat => cat.id === id)?.category);
  }
}
