import { Component } from '@angular/core';
import { RegisterserviceService } from '../registerservice.service';

@Component({
  selector: 'app-register-page',
  imports: [],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  name = '';
  email = '';
  password = '';

  constructor(private registerService: RegisterserviceService) { }

  onSubmit() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    this.registerService.registerUser(userData).subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
    );
  }
}
