import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MoviesSeriesComponent } from './movies-series/movies-series.component';
import { MoviesSeriesAboutComponent } from './movies-series-about/movies-series-about.component';
import { AboutProfileComponent } from './about-profile/about-profile.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RenderMode, ServerRoute } from '@angular/ssr';

export const moviesSeriesAboutRoute = {
    path: 'movies-series-about/:id',
    component: MoviesSeriesAboutComponent,
    renderMode: RenderMode.Prerender,
    getPrerenderParams: (req: { params: { id: string } }) => {
        return [{ id: req.params.id }];
      }
  };

export const routes: Routes = [
    { path: 'main-page', component: MainPageComponent },
    { path: 'movies-series', component: MoviesSeriesComponent },
    { path: 'about-profile', component: AboutProfileComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'footer', component: FooterComponent },
    { path: '', pathMatch: 'full', redirectTo: 'main-page'}
];