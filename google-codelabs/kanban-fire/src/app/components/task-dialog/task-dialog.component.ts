import { KanbanTask, TaskDialogData } from 'src/app/models/task';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent {

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData,
  ) { 
    if (data.task) {
      this.form.patchValue(data.task);
    }
  }

  cancel(): void {
    this.dialogRef.close(this.data);

  }
}
