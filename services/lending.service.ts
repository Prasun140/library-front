import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LendingModel } from 'src/app/pages/lending.model';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LendingService {

  constructor(
    private http:HttpClient
  ) { }
  
  public createLending(lendingObject: any): Observable<HttpEvent<ArrayBuffer>>{
    let headers = new HttpHeaders();
    headers.set("username", localStorage.getItem("username") || "");

    return this.http.post<HttpEvent<ArrayBuffer>>(`${baseUrl}/lendings`, lendingObject, {"headers": headers});
  }
}
