import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class LoginService {
  api: string = ``;
  constructor(private http: HttpClient) {}
  validateLogin(username, password) {
    this.http.get('');
  }
}
