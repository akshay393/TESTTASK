import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor( private http : HttpClient) { }

  createHeaderWithoutToken (headers : HttpHeaders) {
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
  }

  getWithoutToken(url) {
    const headres = new HttpHeaders();
    this.createHeaderWithoutToken(headres);

    return this.http.get(url,
      {
        headers : headres
      }
    );
  }

  postWithoutToken(url, obj) {
    const headres1 = new HttpHeaders();
    this.createHeaderWithoutToken(headres1);

    return this.http.post(url, obj,
      {
        headers : headres1
      }
    );
  }
}
