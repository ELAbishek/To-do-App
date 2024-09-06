package com.todo.app.Service;


import java.util.Optional;

import com.todo.app.Item.Task;
import com.todo.app.Repository.TaskRepository;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService{

        @Autowired
        private TaskRepository taskRepo;

        public List<Task> fetchAllTodoItems(){
                return (List<Task>) taskRepo.findAll();
        }

        public void saveTask(Task task){
                taskRepo.save(task);
        }

        public void deltask(long id) {
                taskRepo.deleteById(id);
        }

}
