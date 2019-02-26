package fr.kybox.kytasks.repository;

import fr.kybox.kytasks.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {
}
