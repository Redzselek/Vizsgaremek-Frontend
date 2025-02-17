import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  private apiUrl = 'https://egyedirobi.moriczcloud.hu/vizsga/register';

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {
    return this.http.post(this.apiUrl, userData);
  }
}
