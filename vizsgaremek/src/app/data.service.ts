import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _router: Router, private http: HttpClient) { }
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.get_logged_in_state());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private get_logged_in_state(): boolean {
    return !!localStorage.getItem('logged');  // Or check cookies if you're storing it there
  }

  login() {
    localStorage.setItem('logged', "true")
    this.isAuthenticatedSubject.next(true);
  }

  logout() {
    localStorage.removeItem('logged');
    this.isAuthenticatedSubject.next(false);
  }

  move_to(redirect_to: string) {
    this._router.navigateByUrl(redirect_to);
  }
}
