import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ApiMethodsService {

  constructor( private httpClient : HttpClientService) { }

  getWt(url){
    return this.httpClient.getWithoutToken(url);
  }

  postWt(url, obj) {
    return this.httpClient.postWithoutToken(url, obj);
  }
}
