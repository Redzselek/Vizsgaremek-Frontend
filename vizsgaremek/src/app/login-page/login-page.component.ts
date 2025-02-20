import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface LoginResponse {
  message: string;
  status: string;
  data: {
    user: {
      id: number;
      name: string;
      email: string;
      email_verified_at: string | null;
      created_at: string;
      updated_at: string;
      isAdmin: boolean | null;
      apikey: string | null;
    };
    token: string;
  };
}

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  showSuccessAlert: boolean = false;
  successMessage: string = '';

  constructor(private http: HttpClient, private dataservice: DataService) { }

  url = "https://egyedirobi.moriczcloud.hu/vizsga/login"
  
  onSubmit(email: string, pass: string) {
    let headerss = new HttpHeaders();
    headerss.set('X-Requested-With', 'XMLHttpRequest')
    headerss.set('Content-Type', 'application/json')
    let formData: FormData = new FormData();
    formData.append('email', email);
    formData.append('password', pass);

    this.http.post<LoginResponse>(this.url, formData, { headers: headerss, observe: 'response', withCredentials: true }).subscribe(
      data => {
        if (data.status === 200 && data.body) {
          this.successMessage = data.body.message;
          this.showSuccessAlert = true;
          this.dataservice.login();
          setTimeout(() => {
            this.dataservice.move_to('/movies-series');
          }, 1500);
        }
      },
      error => document.getElementById("hiba")!.innerText = error.error.status
    )
  }
}
