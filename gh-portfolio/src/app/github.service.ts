import { Repository } from './repository';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private userUrl: string = '';

  constructor(private http: HttpClient) { 
    this.userUrl = `${environment.api_url}/users/${environment.github_username}`;
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }

  getRepos(): Observable<Repository[]>{
    return this.http.get<Repository[]>(`${this.userUrl}/repos`);
  }
}
