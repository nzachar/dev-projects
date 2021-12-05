import { Issue } from './../model/issue';
import { Injectable } from '@angular/core';
import { issues } from 'src/assets/mock-issues';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  private issues: Issue[] = issues;

  constructor() { }

  getPendingIssues(): Issue[] {
    return this.issues.filter(issue => !issue.completed);
  }

  createIssue(issue: Issue) {
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue);
  }

  completeIssue(issueNo: number) {
    const index = this.issues.findIndex(i => i.issueNo === issueNo);
    if (index) {
      this.issues[index] = {
        ...this.issues[index],
        completed: new Date()
      }
    }
  }
}
