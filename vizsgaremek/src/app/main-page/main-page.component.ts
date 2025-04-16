import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { AuthService } from '../services/auth.service';
import { DataService } from '../data.service';
import { Subscription, forkJoin } from 'rxjs';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// Interface for show rating data
interface ShowRating {
  show_id: number;
  average_rating: number;
}

interface ApiResponse {
  status: string;
  data: {
    user: any;
    shows: Show[];
  };
}

// Interface for show details
interface Show {
  id: number;
  user_id: number;
  title: string;
  description: string;
  category: string;
  type: string;
  season: number;
  episode: number;
  image_url: string;
  created_at: string;
  updated_at: string;
  rating?: number;
}

// Interface for dashboard response
interface DashboardResponse {
  status: string;
  data: {
    user: {
      name: string;
      email: string;
    };
    shows: Show[];
  };
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {
  authenticated = false;
  userName: string | null = null;
  shows: Show[] = [];
  private subscriptions: Subscription[] = [];

  // Top rated shows
  topRatedShows: Show[] = [];
  isLoading = true;
  movieCount = 0;
  seriesCount = 0;

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // Initialize authentication state from localStorage
    this.authenticated = this.dataService.get_logged_in_state();

    // Subscribe to the emitter for updates
    this.subscriptions.push(
      Emitters.authEmitter.subscribe((auth: boolean) => {
        this.authenticated = auth;
      })
    );

    // Subscribe to the data service's authentication observable
    this.subscriptions.push(
      this.dataService.isAuthenticated$.subscribe(isAuthenticated => {
        this.authenticated = isAuthenticated;
      })
    );

    // Subscribe to the auth service's user observable for the user name
    this.subscriptions.push(
      this.authService.user$.subscribe(user => {
        if (user) {
          this.userName = user.name || null;
        }
      })
    );

    // Emit the current authentication state
    Emitters.authEmitter.emit(this.authenticated);

    // Load top rated shows
    this.loadTopRatedShows();

    this.http.get<ApiResponse>('https://egyedirobi.moriczcloud.hu/vizsga-api/dashboard', {
      withCredentials: true
    })
      .subscribe({
        next: (response) => {
          if (response.status === 'success') {
            const shows = response.data.shows;
            this.shows = shows;
            this.movieCount = shows.filter(show => show.type === 'movie').length;
            this.seriesCount = shows.filter(show => show.type === 'series').length;
          }
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching shows:', err);
          this.isLoading = false;
        }
      });
  }

  loadTopRatedShows(): void {
    this.isLoading = true;

    // Use forkJoin to make both API calls in parallel
    forkJoin({
      ratings: this.dataService.getAverageRatings(),
      dashboard: this.dataService.getDashboardData()
    }).subscribe({
      next: (result) => {
        const ratings = result.ratings as ShowRating[];
        const dashboardData = result.dashboard as DashboardResponse;

        if (ratings.length && dashboardData.data.shows.length) {
          // Get the top 5 rated shows
          const topRatedIds = ratings.slice(0, 5).map(rating => rating.show_id);

          // Find the corresponding show details for each ID and add ratings
          this.topRatedShows = topRatedIds
            .map(id => {
              const show = dashboardData.data.shows.find(show => show.id === id);
              if (show) {
                // Add the rating to the show object
                const ratingObj = ratings.find(r => r.show_id === id);
                if (ratingObj) {
                  show.rating = ratingObj.average_rating;
                }
              }
              return show;
            })
            .filter(show => show !== undefined) as Show[];
        }

        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading top rated shows:', error);
        this.isLoading = false;
      }
    });
  }

  ngOnDestroy(): void {
    // Clean up subscriptions to prevent memory leaks
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // Helper method to convert category string to array
  getCategoryArray(category: string[] | string): string[] {
    if (Array.isArray(category)) {
      return category;
    } else if (typeof category === 'string') {
      try {
        // Próbáljuk meg JSON-ként értelmezni, ha string
        const parsed = JSON.parse(category);
        return Array.isArray(parsed) ? parsed : [category];
      } catch (e) {
        // Ha nem sikerül JSON-ként értelmezni, akkor egyszerű string
        return [category];
      }
    }
    return [];
  }
}
