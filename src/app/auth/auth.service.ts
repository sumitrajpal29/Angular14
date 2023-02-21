import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { loginForm } from '../types/loginForm';
import { registerForm } from '../types/registerForm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoading: boolean = false;
  isAuthenticated: boolean = false;

  constructor() { }

  login(form: loginForm) {

    if (this.isLoading)
      return;
    else
      this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        console.log("login successfull");
        this.isAuthenticated = true;

        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
      }).finally(() => (this.isLoading = false));
  }



  register(form: registerForm) {
    if (this.isLoading)
      return;
    else
      this.isLoading = true;

    if (form.password != form.confirmPassword) {
      alert("Password mismached");
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Successfully registered");

        // ...
      })
      .catch((error) => {
        alert("not registered")
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      }).finally(() => (this.isLoading = false))
  }
}