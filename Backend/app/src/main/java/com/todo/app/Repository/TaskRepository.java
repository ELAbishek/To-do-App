package com.todo.app.Repository;

import java.util.ArrayList;
import java.util.List;
import com.todo.app.Item.Task;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends CrudRepository<Task, Long>{

}
