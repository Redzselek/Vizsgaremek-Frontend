import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  ngOnInit(): void {
    fetch('https://egyedirobi.moriczcloud.hu/vizsga/dashboard')
      .then(response => response.json())
      .then(json => console.log(json))
  }
}