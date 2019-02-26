package fr.kybox.kytasks.service.impl;

import fr.kybox.kytasks.domain.Task;
import fr.kybox.kytasks.repository.TaskRepository;
import fr.kybox.kytasks.service.TaskService;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService {

    private TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Iterable<Task> list() {
        return taskRepository.findAll();
    }

    @Override
    public Task save(Task task) {

        return taskRepository.save(task);
    }
}
