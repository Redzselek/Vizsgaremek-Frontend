import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  progressWidth: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.calculateProgressWidth();
  }

  ngOnInit() {
    this.calculateProgressWidth();
  }

  calculateProgressWidth() {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    this.progressWidth = (scrollPosition / scrollHeight) * 100;
  }
}
