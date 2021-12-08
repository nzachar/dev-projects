import { KanbanTask } from 'src/app/models/task';
import { TaskDialogResult } from 'src/app/models/task';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { tasks } from 'src/assets/tasks';


@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {

  @Input() tasks: KanbanTask[] | undefined;


  backlog: KanbanTask[] = [];

  inProgress: KanbanTask[] = [];

  done: KanbanTask[] = [];

  ngOnInit(): void {
    this.backlog = tasks;
  }



  drop(event: CdkDragDrop<KanbanTask[]>): void {
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('Transfering item to new container')
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  editTask(list: string, task: KanbanTask) {

  }
}
