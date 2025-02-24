import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Emitters } from './emitters/emitters';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, HttpClientModule, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private dataservice: DataService, private http: HttpClient) { }
    authenticated = false;
  
    url = "https://egyedirobi.moriczcloud.hu/vizsga/logout"
    
    ngOnInit(): void {
      Emitters.authEmitter.subscribe(
        (auth: boolean) => {
          this.authenticated = auth;
        }
      );
    }
  
    logout(){
      console.log("logging out");
      this.http.post<any>(this.url, {}, { withCredentials: true }).subscribe(
        response => {
          localStorage.removeItem('logged');
          this.dataservice.move_to('/login');
        }
      )
    }
}
