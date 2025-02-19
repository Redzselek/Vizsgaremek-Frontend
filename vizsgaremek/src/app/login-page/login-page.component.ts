import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(private http: HttpClient, private dataservice: DataService) { }
  url = "https://egyedirobi.moriczcloud.hu/vizsga/login"
  onSubmit(email: string, pass: string) {
    let headerss = new HttpHeaders();
    headerss.set('X-Requested-With', 'XMLHttpRequest')
    headerss.set('Content-Type', 'application/json')
    let formData: FormData = new FormData();
    formData.append('email', email);
    formData.append('password', pass);

    this.http.post(this.url, formData, { headers: headerss, observe: 'response', withCredentials: true }).subscribe(
      data => {
        console.log(data)
        this.dataservice.login()
        this.dataservice.move_to('/')
      },
      error => document.getElementById("hiba")!.innerText = error.error.status
    )
  }
}
