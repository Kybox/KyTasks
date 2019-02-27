import { Component, OnInit } from '@angular/core';
import {TaskModel} from "../task.model";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: TaskModel[] = [];

  constructor(private taskService:TaskService) { }

  ngOnInit() {
      this.taskService.getTasks().subscribe(
          (tasks:any[]) => {
              this.tasks = tasks
          },
          (error) => console.log(error)
      );

      this.taskService.onTaskAdded.subscribe(
          (task:TaskModel) => this.tasks.push(task)
      );
  }

  getDueDateLabel(task:TaskModel){
      return task.completed ? 'badge-success' : 'badge-primary';
  }

  onTaskChange(event, task){
      this.taskService.saveTask(task, event.target.checked).subscribe();
  }
}
