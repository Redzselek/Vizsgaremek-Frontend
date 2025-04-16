import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { EditUploadComponent } from '../edit-upload/edit-upload.component';
import { FormsModule } from '@angular/forms';

// Register Swiper custom elements
declare global {
  interface Window {
    Swiper: any;
  }
}

@Component({
  selector: 'app-about-profile',
  standalone: true,
  imports: [CommonModule, HttpClientModule, EditUploadComponent, FormsModule],
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
  // Password change properties
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  showCurrentPassword: boolean = false;
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;
  isChangingPassword: boolean = false;
  passwordError: string | null = null;
  passwordSuccess: string | null = null;

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
        console.log(this.user);

        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load user data. Please log in again.';
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
          '990': {
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
  changePassword() {
    this.isChangingPassword = true;
    this.passwordError = null;
    this.passwordSuccess = null;

    // Validate passwords match
    if (this.newPassword !== this.confirmPassword) {
      this.passwordError = 'Passwords do not match';
      this.isChangingPassword = false;
      return;
    }

    this.authService.changePassword(this.currentPassword, this.newPassword).subscribe({
      next: () => {
        this.passwordSuccess = 'Password changed successfully! You will be logged out.';
        this.isChangingPassword = false;

        // Clear form
        this.currentPassword = '';
        this.newPassword = '';
        this.confirmPassword = '';
        setTimeout(() => {
          // Close the modal almost instantly using DOM API
          const closeButton = document.querySelector('#settingsModal .btn-close') as HTMLElement;
          if (closeButton) {
            closeButton.click();
          }

          // Logout after a very short delay

          this.logout();
        }, 2000);
      },
      error: (error: any) => {
        this.passwordError = error.error?.message || 'Failed to change password. Please try again.';
        this.isChangingPassword = false;
      }
    });
  }
}
