package fr.kybox.kytasks.service;

import fr.kybox.kytasks.domain.Task;

public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);
}
