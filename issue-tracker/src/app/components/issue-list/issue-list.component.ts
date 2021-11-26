import { ConfirmDialogComponent } from './../confirm-dialog/confirm-dialog.component';
import { issues } from './../../../assets/mock-issues';
import { IssuesService } from './../../services/issues.service';
import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/model/issue';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues: Issue[] = issues;
  displayedColumns: string[] = ['issueNo', 'title', 'description', 'priority', 'type', 'openDialog']
  showReportIssue = false;
  selectedIssue: Issue | null = null;

  constructor(private issueService: IssuesService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getIssues();
  }

  private getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  }

  openDialog(issue: Issue): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { issueNo: issue.issueNo },
    });

    dialogRef.afterClosed().subscribe(issueNo => {
      this.issueService.completeIssue(issueNo);
     this.getIssues();
    });
  }

}
