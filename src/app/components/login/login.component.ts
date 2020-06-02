import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  componentState: 'login' | 'create-account' = 'login';
  constructor() { }

  ngOnInit(): void {
  }

  changeState() {
    if (this.componentState === 'login') {
      this.componentState = 'create-account';
    } else if (this.componentState === 'create-account') {
      this.componentState = 'login';
    }
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
  }

  disableSubmit() {
    if (
      this.componentState === 'create-account'
      &&
      (!this.username)
      ||
      (!this.confirmPassword || !this.password)
      ||
      (this.confirmPassword && this.password && (this.password !== this.confirmPassword) )
      ||
      (this.confirmPassword && this.password && (this.confirmPassword.length < 6 || this.password.length < 6))
      ||
      (this.username.length < 6)
    ) {
      return true;
    }
    return false;
  }

  submitAction() {
    if (
      this.componentState === 'create-account'
      &&
      (!this.username)
      ||
      (!this.confirmPassword || !this.password)
      ||
      (this.confirmPassword && this.password && (this.password !== this.confirmPassword) )
      ||
      (this.confirmPassword && this.password && (this.confirmPassword.length < 6 || this.password.length < 6))
      ||
      (this.username.length < 6)
    ) {
      return;
    }
    console.log(this);
  }

  login() {
    if (!this.username || !this.password && (this.username && this.password && this.username.length > 6 && this.password.length > 6) ) {
      return;
    }

  }
}
