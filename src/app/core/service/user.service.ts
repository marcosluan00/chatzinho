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


  getGithubUser(username:string): Observable<User> {
    return this.http.get(`https://api.github.com/users/${username}`).pipe(
      map((data: any) => ({
        login: data.login,
        name: data.name,
        bio: data.bio,
        avatarUrl: data.avatar_url
      }))
    );
  }
}
