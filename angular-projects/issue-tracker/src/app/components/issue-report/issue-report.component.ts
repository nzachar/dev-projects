import { IssuesService } from './../../services/issues.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {

  issueForm: FormGroup = this.builder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    priority: ['', Validators.required],
    type: ['', Validators.required],
  });

  @Output() formClose = new EventEmitter();

  constructor(private builder: FormBuilder, private issueService: IssuesService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.issueForm.valid) {
      this.issueService.createIssue(this.issueForm.value);
      this.formClose.emit();
    }

  }

}
