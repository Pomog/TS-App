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
  - `teachers`: List<Teacher>
  - `students`: List<Student>

### Teacher

Represents an educator employed by an organization.

- **Attributes:**
  - `id`: Long
  - `name`: String
  - `email`: String
  - `subject`: String
  - `organization`: Organization
  - `plannedLessons`: List<Lesson>
  - `completedLessons`: List<Lesson>
  - `paymentsFromStudents`: List<Payment>

### Student

Represents a learner enrolled in an organization.

- **Attributes:**
  - `id`: Long
  - `name`: String
  - `email`: String
  - `organization`: Organization
  - `plannedLessons`: List<Lesson>
  - `completedLessons`: List<Lesson>
  - `paymentsToTeacher`: List<Payment>

### Lesson

Represents a scheduled or completed lesson.

- **Attributes:**
  - `id`: Long
  - `title`: String
  - `startTime`: LocalDateTime
  - `videoUrl`: URL
  - `materialUrl`: List<URL>
  - `teacher`: Teacher
  - `student`: Student
  - `realizationStatus`: Boolean (planned or completed)
  - `paymentStatus`: Boolean

### Payment

Represents a payment made for a lesson.

- **Attributes:**
  - `id`: Long
  - `amount`: BigInteger
  - `arrangedDate`: LocalDateTime
  - `paymentDate`: LocalDateTime
  - `student`: Student
  - `lesson`: Lesson