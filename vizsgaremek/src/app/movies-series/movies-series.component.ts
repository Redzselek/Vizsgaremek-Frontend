import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Show {
  title: string;
  description: string;
  category: string;
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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<ApiResponse>('https://egyedirobi.moriczcloud.hu/vizsga/dashboard')
      .subscribe(response => {
        if (response.status === 'success') {
          this.shows = response.data.shows;
        }
      });
      console.log(this.shows);
  }
}
