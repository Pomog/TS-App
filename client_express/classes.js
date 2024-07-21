// Organization class
class Organization {
    constructor(id, name, address, email, password, teachers = [], students = []) {
        this.id = id || 1;
        this.name = name || 'Default Organization';
        this.address = address || '123 Main St';
        this.email = email || 'org@example.com';
        this.password = password || 'password';
        this.teachers = teachers;
        this.students = students;
    }
}

// Teacher class
class Teacher {
    constructor(id, name, email, password, info, subject, organization, startHour, endHour, plannedLessons = [], completedLessons = [], paymentsFromStudents = []) {
        this.id = id || 1;
        this.name = name || 'Default Teacher';
        this.email = email || 'teacher@example.com';
        this.password = password || 'password';
        this.info = info || 'Default Info';
        this.subject = subject || 'Default Subject';
        this.organization = organization || new Organization();
        this.startHour = startHour || new Date(2024, 0, 1, 9, 0); // Default start time 09:00
        this.endHour = endHour || new Date(2024, 0, 1, 17, 0); // Default end time 17:00
        this.plannedLessons = plannedLessons;
        this.completedLessons = completedLessons;
        this.paymentsFromStudents = paymentsFromStudents;
    }
}

// LessonAssessment class
class LessonAssessment {
    constructor(id, time, lesson, accuracy_patience, explanation, teaching_materials, responsiveness) {
        this.id = id || 1;
        this.time = time || 1; //duration of the lesson
        this.lesson = lesson || null; // Should be an instance of Lesson
        this.accuracy_patience = accuracy_patience || 1; //from 1 to 5
        this.explanation = explanation || 1; //from 1 to 5
        this.teaching_materials = teaching_materials || 1; //from 1 to 5
        this.responsiveness = responsiveness || 1; //from 1 to 5
    }
}

// Student class
class Student {
    constructor(id, name, email, password, organization, plannedLessons = [], completedLessons = [], paymentsToTeacher = []) {
        this.id = id || 1;
        this.name = name || 'Default Student';
        this.email = email || 'student@example.com';
        this.password = password || 'password';
        this.organization = organization || new Organization();
        this.plannedLessons = plannedLessons;
        this.completedLessons = completedLessons;
        this.paymentsToTeacher = paymentsToTeacher;
    }
}

// Lesson class
class Lesson {
    constructor(id, topic, startTime, endTime, videoUrl, materialUrl = [], teacher, student, approvedByTeacher, approvedByStudent, realizationStatus, paymentStatus, lessonAssessment) {
        this.id = id || 1;
        this.topic = topic || 'Default Topic';
        this.startTime = startTime || new Date(2024, 0, 1, 9, 0);
        this.endTime = endTime || new Date(2024, 0, 1, 10, 0);
        this.videoUrl = videoUrl || 'http://example.com/video';
        this.materialUrl = materialUrl;
        this.teacher = teacher || new Teacher();
        this.student = student || new Student();
        this.approvedByTeacher = approvedByTeacher || false;
        this.approvedByStudent = approvedByStudent || false;
        this.realizationStatus = realizationStatus || false;
        this.paymentStatus = paymentStatus || false;
        this.lessonAssessment = lessonAssessment || new LessonAssessment();
    }
}

// PersonalCabinet class
class PersonalCabinet {
    constructor(id, personID, email, organization, plannedLessons = [], completedLessons = [], payment = []) {
        this.id = id || 1;
        this.personID = personID || 1;
        this.email = email || 'personal@example.com';
        this.organization = organization || new Organization();
        this.plannedLessons = plannedLessons;
        this.completedLessons = completedLessons;
        this.payment = payment;
    }
}

// Payment class
class Payment {
    constructor(id, amount, arrangedDate, paymentDate, student, lesson) {
        this.id = id || 1;
        this.amount = amount || BigInt(100);
        this.arrangedDate = arrangedDate || new Date(2024, 0, 1, 9, 0);
        this.paymentDate = paymentDate || new Date(2024, 0, 1, 13, 0);;
        this.student = student || new Student();
        this.lesson = lesson || new Lesson();
    }
}


export {Organization, Teacher, LessonAssessment, Student, Lesson, PersonalCabinet, Payment}