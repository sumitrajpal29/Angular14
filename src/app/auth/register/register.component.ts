import { Component, OnInit } from '@angular/core';
import { registerForm } from 'src/app/types/registerForm';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: registerForm = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  passwordMatched: boolean = true;
  registering: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.register(this.registerForm);
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
