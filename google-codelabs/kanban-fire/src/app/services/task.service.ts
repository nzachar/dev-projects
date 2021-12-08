import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tasks } from 'src/assets/tasks';
import { KanbanTask } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<KanbanTask[]> {
    return new Observable<KanbanTask[]>(observable => observable.next(tasks));
  }
}
