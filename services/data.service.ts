import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    })
  };

  constructor(private http: HttpClient) { }
  processGet(endPoint?: string) {
    let serviceEndPoint = environment.url + endPoint
    return this.http.get(serviceEndPoint, this.httpOptions)
  }
  
  processPost(body: any,endPoint: string) {
    let serviceEndPoint = environment.url + endPoint;
    return this.http.post(serviceEndPoint, body, this.httpOptions)
  }
}
