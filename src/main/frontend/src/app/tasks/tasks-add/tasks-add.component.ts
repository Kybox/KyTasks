import { Component, OnInit } from '@angular/core';
import {TaskService} from "../task.service";
import {TaskModel} from "../task.model";

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

    addTaskValue:string = null;

  constructor(private taskService:TaskService) { }

  ngOnInit() {
  }

  onTaskAdd(event){
      let task:TaskModel = new TaskModel(event.target.value, false, TasksAddComponent.getTodayAsString());
      this.taskService.addTask(task).subscribe((newTask:TaskModel) => {
              // Clear input
              this.addTaskValue = " ";
              this.taskService.onTaskAdded.emit(newTask);
              });
  }

  static getTodayAsString() {

      let today = new Date();
      let day:any = today.getDate();
      let month:any = today.getMonth() + 1;
      let year:any = today.getFullYear();

      if(day < 10) day = "0" + day;
      if(month < 10) month = "0" + month;

      return day + "/" + month + "/" + year;
  }
}
