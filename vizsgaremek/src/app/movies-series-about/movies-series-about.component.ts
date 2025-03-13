// movies-series-about.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-series-about',
  templateUrl: './movies-series-about.component.html',
  styleUrls: ['./movies-series-about.component.css']
})
export class MoviesSeriesAboutComponent implements OnInit {
  selectedShow: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.http.get(`https://egyedirobi.moriczcloud.hu/vizsga-api/show-selected-show/${id}`)
        .subscribe(response => {
          this.selectedShow = response;
        });
    });
  }
}