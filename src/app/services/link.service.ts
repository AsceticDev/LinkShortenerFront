import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LinkService {
public baseUrl = 'http://localhost:5000';

  constructor(
    private http: HttpClient,
  ) { }


  public createShortenedLink(shortenedLinkForm) {
    return this.http.post(this.baseUrl + '/api/v1/shortenedlinks', shortenedLinkForm)
      .pipe(catchError(error => {
        console.log('error from create: ', error.error)
        return of(false);
      }));
  }

  public getShortenedLink(shortId){
    return this.http.get(this.baseUrl + '/api/v1/shortenedlinks/' + shortId);
  }

  public getAllShortenedLinks(paginationUrl) {
    return this.http.get(this.baseUrl+paginationUrl);
  }

  public updateShortenedLink(id: any, postData) {
    return this.http.put(this.baseUrl + `/${id}`, postData);
  }

  public deleteShortenedLink(id: any) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

}
