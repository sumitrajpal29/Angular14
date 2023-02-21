import { Component, OnInit } from '@angular/core';
import { loginForm } from 'src/app/types/loginForm';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: loginForm = {
    email: '',
    password: ''
  }

  logging: boolean = false;


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.login(this.loginForm);
  }

  isLoading() {
    return this.authService.isLoading;
  }

}