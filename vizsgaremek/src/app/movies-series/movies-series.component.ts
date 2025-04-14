import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { CategoryService } from '../services/category.service';

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

  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private categoryService: CategoryService,
    private router: Router
  ) { }

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

  // Kategóriák feldolgozása minden show-hoz
  processShowCategories() {
    this.shows.forEach(show => {
      // Convert category IDs to names
      if (typeof show.category === 'string' && show.category) {
        show.category = this.categoryService.parseCategoryString(show.category);
      } else if (Array.isArray(show.category)) {
        show.category = show.category.map(cat => this.categoryService.getCategoryNameFromId(cat.toString()));
      } else if (!show.category) {
        show.category = [];
      }
    });
  }

  // Helper method to convert category string to array and convert IDs to names
  getCategoryArray(category: string[] | string): string[] {
    if (Array.isArray(category)) {
      return category.map(cat => this.categoryService.getCategoryNameFromId(cat));
    } else if (typeof category === 'string') {
      return this.categoryService.parseCategoryString(category);
    }
    return [];
  }
}
