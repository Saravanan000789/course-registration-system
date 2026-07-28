package com.example.Course.Registration.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Course {
    @Id
    public String courseId;
    public String courseName;
    public String trainerName;
    public int durationWeeks;

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getTrainer() {
        return trainerName;
    }

    public void setTrainer(String trainer) {
        this.trainerName = trainer;
    }

    public int getDurationInWeeks() {
        return durationWeeks;
    }

    public void setDurationInWeeks(int durationInWeeks) {
        this.durationWeeks = durationInWeeks;
    }
}
