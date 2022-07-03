import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';

import { UserModel } from 'src/app/pages/user.model';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  constructor(
    private http:HttpClient) { }

  public addUserAsAdmin (user:any) : Observable<UserModel>{
    return this.http.post<UserModel>(`${baseUrl}/users/register/admin`, user);
  }

  public addUserAsStudent(user:any) : Observable<UserModel>{
    return this.http.post<UserModel>(`${baseUrl}/users/register/student`, user);
  }

  public login(username:string, password:string) : Observable<UserModel>{
    return this.http.post<UserModel>(`${baseUrl}/users/login`, {username, password});
  }
}
