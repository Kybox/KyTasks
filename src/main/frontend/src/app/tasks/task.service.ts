import {HttpClient} from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import {TaskModel} from "./task.model";

@Injectable()
export class TaskService {

    onTaskAdded = new EventEmitter<TaskModel>();

    constructor(private http:HttpClient){

    }

    getTasks(){
        return this.http.get("/api/tasks");
    }

    saveTask(task:TaskModel, checked:boolean){

        task.completed = checked;
        return this.http.post("/api/tasks/save", task);
    }

    addTask(task:TaskModel){

        return this.http.post("/api/tasks/save", task);
    }
}
