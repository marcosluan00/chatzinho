import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //pegar o avatar do github
  private baseUrl = 'https://api.github.com/users/';
  public githubUsername!:string;
  private githubUser!: User;

  constructor(private http: HttpClient) { }



}
