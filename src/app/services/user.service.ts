import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

public baseUrl = 'http://localhost:5000';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public createUser(userForm) {
    let headers = new HttpHeaders();
    const auth_token = localStorage.getItem('access_token');
    headers = headers.set('Authorization', `Bearer ${auth_token}`);

    return this.http.post(this.baseUrl+'/api/v1/users', userForm, { headers });
  }

  public getUser(userId){
    let headers = new HttpHeaders();
    const auth_token = localStorage.getItem('access_token');
    headers = headers.set('Authorization', `Bearer ${auth_token}`);

    return this.http.get(this.baseUrl + '/api/v1/users/' + userId, {
      headers
    });
  }

  public getAllUsers(paginationUrl) {
    let headers = new HttpHeaders();
    const auth_token = localStorage.getItem('access_token');
    headers = headers.set('Authorization', `Bearer ${auth_token}`);
    const userCompany = localStorage.getItem('userCompany');

    return this.http.get(this.baseUrl+paginationUrl, { headers });
  }

  public updateUser(id: any, postData) {

    let headers = new HttpHeaders();
    const auth_token = localStorage.getItem('access_token');
    headers = headers.set('Authorization', `Bearer ${auth_token}`);

    return this.http.put(this.baseUrl + `/${id}`, postData, { headers });
  }

  public deleteUser(id: any) {
    let headers = new HttpHeaders();
    const auth_token = localStorage.getItem('access_token');
    headers = headers.set('Authorization', `Bearer ${auth_token}`);

    return this.http.delete(this.baseUrl + `/${id}`, { headers });
  }

}