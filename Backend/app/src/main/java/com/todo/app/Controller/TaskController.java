package com.todo.app.Controller;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import com.todo.app.Item.Task;
import com.todo.app.Repository.TaskRepository;
import com.todo.app.Service.TaskService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class TaskController {

    @Autowired
    private TaskService taskservice;

    @GetMapping("/tasks")
    public ResponseEntity<?> fetchAllTodoItems() {
        List<Task> taskitems = taskservice.fetchAllTodoItems();
        return ResponseEntity.ok(taskitems);
    }

    @PostMapping("/add")
    public String add(@RequestBody Task task) {
        taskservice.saveTask(task);
        return "Task added";
    }

    @DeleteMapping("/tasks/{orderId}")
    public ResponseEntity<Long> deleteOrder(@PathVariable(value = "orderId") long orderId) {
        taskservice.deltask(orderId);
        return ResponseEntity.ok(orderId);
    }

}
