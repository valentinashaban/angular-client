import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

@Injectable()
export class UserService {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  save(firstName: string, lastName: string) {
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    const body = 'firstName=' + firstName + '&lastName=' + lastName;

    this.http.post('/add', body, new RequestOptions(headers));
  }

  getUsers() {
    this.http.get('/users');
  }

}
