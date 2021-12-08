import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';
import { KanbanTask, TaskDialogResult } from './models/task';
import { TaskService } from './services/task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-fire';

  tasks: KanbanTask[] | undefined;
  constructor(private taskService: TaskService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '250px',
      data: {
        task: null
      },
    });

    dialogRef.afterClosed().subscribe((result: TaskDialogResult | undefined) => {
      if (!result?.task) {
        return;
      }
      this.tasks?.push(result.task);
    });
  }
}
