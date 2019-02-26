import { Component, OnInit } from '@angular/core';
import {TaskModel} from "../task.model";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: TaskModel[] = [];

  constructor() { }

  ngOnInit() {
      this.tasks.push(new TaskModel(1, "task 1", true, "01/01/2019"));
      this.tasks.push(new TaskModel(2, "task 2", true, "10/01/2019"));
      this.tasks.push(new TaskModel(3, "task 3", true, "20/01/2019"));
  }

  getDueDateLabel(task:TaskModel){
      return task.completed ? 'badge-success' : 'badge-primary';
  }

  onTaskChange(event, task){
      console.log("Task has changed");
  }
}
