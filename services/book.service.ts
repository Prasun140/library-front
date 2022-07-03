import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import baseUrl from './helper';
import { Observable } from 'rxjs';

import { UserModel } from 'src/app/pages/user.model';
import { BookModel } from 'src/app/pages/book.model';

@Injectable({
  providedIn: 'root',
})

export class BookService {

  constructor(
    private http:HttpClient) { }

  public getBooks() : Observable<BookModel[]>{
    return this.http.get<BookModel[]>(`${baseUrl}/books`);
  }

  public createBook(book: any): Observable<HttpEvent<ArrayBuffer>>{
    let headers = new HttpHeaders();
    headers.set("username", localStorage.getItem("username") || "");

    return this.http.post<HttpEvent<ArrayBuffer>>(`${baseUrl}/books`, book, {"headers": headers});
  }
}
