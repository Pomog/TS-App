# TS-App
The way for teachers and students to track their lessons, payments, store lessons video and materials, and plan the next classes.
The TS-App
The way for teachers and students to track their lessons, payments, store lessons video and materials, and plan the next classes.

The backend entities description.

Organization
The Organization class represents an educational institution that manages teachers and students.
id (Long)
name (String)
address (String)
email (String)
teachers (List<Teacher>)
students (List<Student>)

Teacher
The Teacher class represents an educator employed by an organization.
id (Long)
name (String)
email (String)
subject (String)
organization (Organization)
plannedLessons (List<Lesson>)
completedLessons (List<Lesson>)
paymentsFromStudents (List<Payment>)


Student
The Student class represents a learner enrolled in an organization.
id (Long)
name (String)
email (String)
organization (Organization)
plannedLessons (List<Lesson>)
completedLessons (List<Lesson>)
paymentsToTeacher (List<Payment>)

Lesson
The Lesson class represents a scheduled or completed lesson.
id (Long)
title (String)
startTime (LocalDateTime)
videoUrl (URL)
materialUrl (List<URL>)
teacher (Teacher)
student (Student)
realizationStatus (Boolean) planned or completed
paymentStatus (Boolean)

Payment
The Payment class represents a payment made for a lesson.
id (Long)
amount (BigInteger)
arrangedDate (LocalDateTime)
paymentDate (LocalDateTime)
student (Student)
lesson (Lesson)
