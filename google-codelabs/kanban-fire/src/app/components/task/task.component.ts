import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KanbanTask, TaskDialogResult } from 'src/app/models/task';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: KanbanTask | null = null;
  @Output() edit = new EventEmitter<KanbanTask>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // delete(task: KanbanTask) {
  //   this.edit.emit({ task, delete: true })
  // }

  // edit(task: KanbanTask) {
  //   const dialogRef = this.dialog.open(TaskDialogComponent, {
  //     width: '250px',
  //     data: { task },
  //   });

  //   dialogRef.afterClosed().subscribe(task => {
  //     this.edit.emit({ task, delete: false })
  //   });
  // }

}
