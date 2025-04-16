import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
  @ViewChild('searchContainer') searchContainer!: ElementRef;

  constructor(private http: HttpClient) { }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Check if click was outside the search container
    if (this.searchContainer && !this.searchContainer.nativeElement.contains(event.target)) {
      this.clearSearch();
    }
  }
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
    this.http.get<any>('https://egyedirobi.moriczcloud.hu/vizsga-api/avg-rating/' + showId)
      .subscribe({
        next: (response) => {
          if (response) {
            const showData = { ...response };
            const show = this.searchResults.find(result => result.id === showId);
            if (show) {
              show.rating = showData.average_rating;
            }
          }
        },
        error: (err) => {
          console.error('Error fetching show details:', err);
        }
      });
  }
}
