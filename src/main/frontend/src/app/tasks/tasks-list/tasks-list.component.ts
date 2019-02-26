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
      return this.taskService.getTasks().subscribe(
          (tasks:any[]) => {
              this.tasks = tasks
          },
          (error) => console.log(error)
      );
  }

  getDueDateLabel(task:TaskModel){
      return task.completed ? 'badge-success' : 'badge-primary';
  }

  onTaskChange(event, task){
      console.log("Task has changed");
  }
}
