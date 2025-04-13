import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { EditUploadComponent } from '../edit-upload/edit-upload.component';

// Register Swiper custom elements
declare global {
  interface Window {
    Swiper: any;
  }
}

@Component({
  selector: 'app-about-profile',
  standalone: true,
  imports: [CommonModule, HttpClientModule, EditUploadComponent],
  templateUrl: './about-profile.component.html',
  styleUrls: ['./about-profile.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutProfileComponent
  implements OnInit, AfterViewInit {
  user: any = {};
  userWatchlist: any = {};
  userUploads: any = {};
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private router: Router,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.fetchUserData();
    
    // Add Swiper script to the document
    const swiperScript = document.createElement('script');
    swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js';
    swiperScript.async = true;
    document.head.appendChild(swiperScript);
  }

  ngAfterViewInit() {
    this.initializeSwiper();
  }

  fetchUserData() {
    this.loading = true;
    this.error = null;

    this.authService.getUserInfo().subscribe({
      next: (userData) => {
        this.user = userData;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Nem sikerült betölteni a felhasználói adatokat. Kérjük, jelentkezzen be újra.';
        this.loading = false;
        console.error('Error fetching user data:', err);

        // Redirect to login if not authenticated
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      }
    });
    this.authService.getUserWatchlist().subscribe({
      next: (userWatchlist) => {
        this.userWatchlist = userWatchlist.data;
      },
      error: (err) => {
        console.error('Error fetching user data:', err);
      }
    });
    this.authService.getUserUploads().subscribe({
      next: (userUploads) => {
        this.userUploads = userUploads;
      },
      error: (err) => {
        console.error('Error fetching user data:', err);
      }
    });
  }

  removeFromWatchlist(showid: number) {
    this.authService.removeFromWatchlist(showid).subscribe({
      next: () => {
        this.fetchUserData();
      },
      error: (err) => {
        console.error('Error removing show from watchlist:', err);
      }
    });
  }

  showDetails($id: number) {
    this.router.navigate(['/movies-series-about', $id]);
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        // Update data service state
        this.dataService.logout();
        // Navigate to login page
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Logout error:', err);
        // Even if there's an error, we'll still clear local state and redirect
        this.dataService.logout();
        this.router.navigate(['/login']);
      }
    });
  }

  initializeSwiper() {
    // Wait for the Swiper script to load and DOM to be ready
    setTimeout(() => {
      const swiperEl = this.elementRef.nativeElement.querySelector('#watchlistSwiper');
      if (swiperEl) {
        // Set default properties
        swiperEl.slidesPerView = 3;
        swiperEl.spaceBetween = 10;
        swiperEl.navigation = true;
        
        // Set breakpoints properly
        swiperEl.breakpoints = {
          
          '140': {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          '640': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '670': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '769': {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          '990':{
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          '1440': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        };
        
        // Initialize the swiper
        swiperEl.initialize();
      }
    }, 1000); // Give it some time to ensure the script is loaded
  }

  modalSettings() {
    const usernameBtn = this.elementRef.nativeElement.querySelector('#usernameBtn');
    const collapseUsername = this.elementRef.nativeElement.querySelector('#collapseUsername');

    if (collapseUsername && collapseUsername.classList.contains('show') && usernameBtn) {
      usernameBtn.setAttribute('aria-expanded', 'true');
      collapseUsername.classList.add('show');
    }
  }

  checkExpand(event: Event) {
    const usernameBtn = this.elementRef.nativeElement.querySelector('#usernameBtn');
    const passwordBtn = this.elementRef.nativeElement.querySelector('#passwordBtn');
    const collapseUsername = this.elementRef.nativeElement.querySelector('#collapseUsername');
    const collapsePassword = this.elementRef.nativeElement.querySelector('#collapsePassword');

    if (!usernameBtn || !passwordBtn || !collapseUsername || !collapsePassword) {
      return;
    }

    if (usernameBtn === event.target) {
      if (collapseUsername.classList.contains('show')) {
        // nem csinál semmit, ha ugyanarra kattintunk
      } else {
        usernameBtn.setAttribute('aria-expanded', 'true');
        collapseUsername.classList.add('show');
        collapsePassword.classList.remove('show');
        passwordBtn.setAttribute('aria-expanded', 'false');
      }
    } else if (passwordBtn === event.target) {
      if (collapsePassword.classList.contains('show')) {
        // nem csinál semmit, ha ugyanarra kattintunk
      } else {
        passwordBtn.setAttribute('aria-expanded', 'true');
        collapsePassword.classList.add('show');
        collapseUsername.classList.remove('show');
        usernameBtn.setAttribute('aria-expanded', 'false');
      }
    }
  }
}
