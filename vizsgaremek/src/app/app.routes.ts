import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MoviesSeriesComponent } from './movies-series/movies-series.component';
import { MoviesSeriesAboutComponent } from './movies-series-about/movies-series-about.component';
import { AboutProfileComponent } from './about-profile/about-profile.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

export const routes: Routes = [
    { path: '**', component: MainPageComponent, pathMatch: 'full'},
    { path: 'movies-series', component: MoviesSeriesComponent },
    { path: 'about-profile', component: AboutProfileComponent },
    { path: 'movies-series-about', component: MoviesSeriesAboutComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent }
];
