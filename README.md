# TS-App

The way for teachers and students to track their lessons, payments, store lessons video and materials, and plan the next classes.

## Overview

TS-App is designed to help teachers and students track their lessons, payments, store lesson videos and materials, and plan future classes. This document provides an overview of the backend entities and user stories to facilitate development and ensure that all required functionalities are covered.

## Backend Entities

### Organization

Represents an educational institution that manages teachers and students.

- **Attributes:**
  - `id`: Long
  - `name`: String
  - `address`: String
  - `email`: String
  - `password`: String
  - `teachers`: List<Teacher>
  - `students`: List<Student>

### Teacher

Represents an educator employed by an organization.

- **Attributes:**
  - `id`: Long
  - `name`: String
  - `email`: String
  - `password`: String
  - `subject`: String
  - `organization`: Organization
  - `startHour` : Integer // a preferred hour to start lessons 24h format
  - `endtHour` : Integer // a preferred hour to finish lessons 24h format
  - `plannedLessons`: List<Lesson>
  - `completedLessons`: List<Lesson>
  - `paymentsFromStudents`: List<Payment>

### LessonAssessment

Represents student assessment of the lesson.

- **Attributes:**
  - `id`: Long
  - `time`: LocalDateTime
  - `lesson`: Lesson
  - `accuracy_patience`: int (from 0 to 5)
  - `explanation`: int (from 0 to 5)
  - `teaching_materials`: int (from 0 to 5)
  - `responsiveness`: int (from 0 to 5)

### Student

Represents a learner enrolled in an organization.

- **Attributes:**
  - `id`: Long
  - `name`: String
  - `email`: String
  - `password`: String
  - `organization`: Organization
  - `plannedLessons`: List<Lesson>
  - `completedLessons`: List<Lesson>
  - `paymentsToTeacher`: List<Payment>

### Lesson

Represents a scheduled or completed lesson.

- **Attributes:**
  - `id`: Long
  - `topic`: String
  - `startTime`: LocalDateTime
  - `endTime`: LocalDateTime
  - `videoUrl`: URL
  - `materialUrl`: List<URL>
  - `teacher`: Teacher
  - `student`: Student
  - `approvedByTeacher`: Boolean
  - `approvedByStudent`: Boolean
  - `realizationStatus`: Boolean (planned or completed)
  - `paymentStatus`: Boolean
  - `lessonAssesment` : LessonAssessment

### PersonalCabinet

Represents a learner enrolled in an organization.

- **Attributes:**
  - `id`: Long
  - `personID`: Long
  - `email`: String
  - `organization`: Organization
  - `plannedLessons`: List<Lesson>
  - `completedLessons`: List<Lesson>
  - `payment`: List<Payment>

### Payment

Represents a payment made for a lesson.

- **Attributes:**
  - `id`: Long
  - `amount`: BigInteger
  - `arrangedDate`: LocalDateTime
  - `paymentDate`: LocalDateTime
  - `student`: Student
  - `lesson`: Lesson
