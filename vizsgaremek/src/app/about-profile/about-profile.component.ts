import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-profile',
  imports: [CommonModule],
  templateUrl: './about-profile.component.html',
  styleUrl: './about-profile.component.css'
})
export class AboutProfileComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://egyedirobi.moriczcloud.hu/vizsga/user').subscribe(
      (response) => {
        this.data = response;
        console.log(this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
