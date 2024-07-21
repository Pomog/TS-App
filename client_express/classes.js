// Organization class
class Organization {
    constructor(name, address, email, password, teachers = [], students = []) {
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
    constructor(name, email, password, info, subject, organization, startHour, startMin, endHour, endMin, plannedLessons = [], completedLessons = [], paymentsFromStudents = []) {
        this.name = name || 'Default Teacher';
        this.email = email || 'teacher@example.com';
        this.password = password || 'password';
        this.info = info || 'Default Info';
        this.subject = subject || 'Default Subject';
        this.organization = organization || new Organization();
        this.startHour = startHour || 9 // Default start time 09:00
        this.startMin = startMin
        this.endHour = endHour || 17 // Default end time 17:00
        this.endMin = endMin
        this.plannedLessons = plannedLessons;
        this.completedLessons = completedLessons;
        this.paymentsFromStudents = paymentsFromStudents;
    }
}

//Subject class
class Subject {
    constructor(category, subject, level){
        this.category = category || "Programming";
        this.subject = subject || "Python";
        this.level = level || "advanced"
    }
}

// LessonAssessment class
class LessonAssessment {
    constructor(time, lesson, accuracy_patience, explanation, teaching_materials, responsiveness) {
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
    constructor(name, email, password, organization, plannedLessons = [], completedLessons = [], paymentsToTeacher = []) {
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
    constructor(topic, startTime, endTime, videoUrl, materialUrl = [], teacher, student, approvedByTeacher, approvedByStudent, realizationStatus, paymentStatus, lessonAssessment) {
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
    constructor(personemail, organization, plannedLessons = [], completedLessons = [], payment = []) {
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
    constructor(amount, arrangedDate, paymentDate, student, lesson) {
        this.amount = amount || BigInt(100);
        this.arrangedDate = arrangedDate || new Date(2024, 0, 1, 9, 0);
        this.paymentDate = paymentDate || new Date(2024, 0, 1, 13, 0);;
        this.student = student || new Student();
        this.lesson = lesson || new Lesson();
    }
}


export {Organization, Teacher, LessonAssessment, Student, Lesson, PersonalCabinet, Payment}