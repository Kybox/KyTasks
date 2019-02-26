package fr.kybox.kytasks;

import fr.kybox.kytasks.domain.Task;
import fr.kybox.kytasks.service.TaskService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class KytasksApplication {

    public static void main(String[] args) {
        SpringApplication.run(KytasksApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(TaskService taskService){

        return args -> {
            taskService.save(new Task(1L, "Create a Spring Boot Application", LocalDate.now(), true));
            taskService.save(new Task(2L, "Create Spring Project packages", LocalDate.now().plusDays(1), false));
            taskService.save(new Task(3L, "Create the Task domain class", LocalDate.now().plusDays(2), false));
            taskService.save(new Task(4L, "Create a service and repository", LocalDate.now().plusDays(3), false));
        };
    }
}
