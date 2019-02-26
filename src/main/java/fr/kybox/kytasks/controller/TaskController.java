package fr.kybox.kytasks.controller;

import fr.kybox.kytasks.domain.Task;
import fr.kybox.kytasks.service.TaskService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Task> taskList(){

        return taskService.list();
    }

    @PostMapping(value = "/save")
    public Task saveTask(@RequestBody Task task){

        return taskService.save(task);
    }
}
