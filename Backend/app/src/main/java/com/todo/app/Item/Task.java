package com.todo.app.Item;

import java.sql.Date;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.todo.app.Repository.TaskRepository;

import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.constraints.FutureOrPresent;
import lombok.*;

@Entity
public class Task {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ID;
    private String taskname;
    private Date sdate;
    private Date edate;

    public Task() {
    }
    public long getID() {
        return ID;
    }
    public void setID(long iD) {
        ID = iD;
    }
    public String getTaskname() {
        return taskname;
    }
    public void setTaskname(String taskname) {
        this.taskname = taskname;
    }
    public Date getSdate() {
        return sdate;
    }
    public void setSdate(Date sdate) {
        this.sdate = sdate;
    }
    public Date getEdate() {
        return edate;
    }
    public void setEdate(Date edate) {
        this.edate = edate;
    }

    


}
