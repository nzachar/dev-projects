import { Repository } from './../repository';
import { GithubService } from './../github.service';
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  repositories$: Observable<Repository[]> | undefined;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.repositories$ = this.githubService.getRepos().pipe(
      map(repos => repos.filter(r => !r.fork))
    );
  }


}
