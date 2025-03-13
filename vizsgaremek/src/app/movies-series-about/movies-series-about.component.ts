// movies-series-about.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Show {
  id: number;
  title: string;
  description: string;
  category: string[];
  type: string;
  image_url: string;
  rating?: number;
  rating_count?: number;
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
    image_url: ''
  };
  isLoading: boolean = true;
  error: string | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadShowDetails(id);
    });
  }

  loadShowDetails(id: string): void {
    this.isLoading = true;
    this.error = null;

    this.http.post<any>(`https://egyedirobi.moriczcloud.hu/vizsga-api/selected-show/${id}`, {})
      .subscribe({
        next: (response) => {
          if (response && response.data) {
            this.selectedShow = response.data;
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
}