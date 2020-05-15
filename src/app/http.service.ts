import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }

  getBeertn() {
    return this.http.get('https://api.openbrewerydb.org/breweries?by_state=Tennessee')
  }

  getBeerny() {
    return this.http.get(' https://api.openbrewerydb.org/breweries?by_state=new_york')
  }

 
}

