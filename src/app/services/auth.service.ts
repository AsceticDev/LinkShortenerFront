import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { Tokens } from '../auth/guards/models/tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public baseUrl = 'http://localhost:5000';
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public login(loginDict) {

    return this.http.post<any>(this.baseUrl + '/auth/login', loginDict)
      .pipe(
        tap(tokens => {
          this.doLoginUser(loginDict.username, tokens)}
          ),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }


  public logout() {
    return this.http.post(this.baseUrl + '/auth/logout', {
      'refreshToken': this.getRefreshToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }

  private doLoginUser(username: string, tokens: Tokens) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  public refreshToken() {
    let headers = new HttpHeaders();
    const refresh_token = this.getRefreshToken();
    headers = headers.set('Authorization', `Bearer ${refresh_token}`);

    console.log('we\'re firing off the testRefreshToken()!')
    return this.http.post(this.baseUrl + '/auth/refresh', { headers })
    .pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.access_token);
    }));
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }

  private storeTokens(tokens: Tokens) {
    console.log('inside storeTokens, logging tokens parameter: ', tokens);
    localStorage.setItem(this.JWT_TOKEN, tokens.access_token);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh_token);
  }

  public getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  public getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  public isLoggedIn() {
    return !!this.getJwtToken();
  }
}
