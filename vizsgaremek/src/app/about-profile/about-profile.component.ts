import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { EditUploadComponent } from '../edit-upload/edit-upload.component';

@Component({
  selector: 'app-about-profile',
  standalone: true,
  imports: [CommonModule, HttpClientModule, EditUploadComponent],
  templateUrl: './about-profile.component.html',
  styleUrls: ['./about-profile.component.css']
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
    this.fetchUserData();;
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
    const swiperEl = this.elementRef.nativeElement.querySelector('swiper-container');
    if (swiperEl) {
      Object.assign(swiperEl, {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 200,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 260,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 200,
          },
        },
      });
      swiperEl.initialize();
    }
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
