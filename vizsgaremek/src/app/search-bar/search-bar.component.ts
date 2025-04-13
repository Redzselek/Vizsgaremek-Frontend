import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface SearchApiResponse {
	id: number;
	title: string;
	type: string;
	image_url: string;
	rating?: number;
}

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
  standalone: true
})


export class SearchBarComponent {
  constructor(private http: HttpClient) { }
  searchQuery: string = "";
  searchResults: SearchApiResponse[] = [];

  clearSearch() {
    this.searchQuery = "";
    this.searchResults = [];
  }

  search(query: string) {
    if (!query || query.trim() === '') {
      this.searchResults = [];
      return;
    }
    
    this.http.post<SearchApiResponse[]>('https://egyedirobi.moriczcloud.hu/vizsga-api/search', {
      search: query
    }, {
      withCredentials: true
    }).subscribe({
      next: (response) => {
        this.searchResults = response;
        console.log('Search results:', this.searchResults);
        
        this.searchResults.forEach(result => {
          this.fetchRating(result.id);
        });
      },
      error: (error) => {
        console.error('Error fetching search results:', error);
      }
    });
  }
  
  fetchRating(showId: number) {
    this.http.get<{success: boolean, average_rating: number}>(`https://egyedirobi.moriczcloud.hu/vizsga-api/avg-rating/${showId}`, {
      withCredentials: true
    }).subscribe({
      next: (response) => {
        const resultIndex = this.searchResults.findIndex(result => result.id === showId);
        if (resultIndex !== -1 && response.success) {
          this.searchResults[resultIndex].rating = response.average_rating;
        }
      },
      error: (error) => {
        console.error(`Error fetching rating for show ID ${showId}:`, error);
      }
    });
  }
}
