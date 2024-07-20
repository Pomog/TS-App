const student1 = {
    name: "student 1",
    email: "student1@mail.com"
}

const student2 = {
    name: "student 2",
    email: "student2@mail.com"
}

const lesson1 = {
    topic: "People and Cultures",
    startTime: new Date(2024, 6, 20, 10, 0),
    endTime: new Date(2024, 6, 20, 11, 0),
    student: student1,
    paymentStatus: true
}

const lesson2 = {
    topic: "House and Home",
    startTime: new Date(2024, 6, 20, 13, 0),
    endTime: new Date(2024, 6, 20, 18, 0),
    student: student1,
    paymentStatus: true
}

const lesson3 = {
    topic: "Slang and Colloquial Language",
    startTime: new Date(2024, 6, 20, 11, 30),
    endTime: new Date(2024, 6, 20, 12, 30),
    student: student2,
    paymentStatus: false
}

const lesson4 = {
    topic: "Slang and Colloquial Language",
    startTime: new Date(2024, 6, 21, 11, 30),
    endTime: new Date(2024, 6, 21, 16, 15),
    student: student2,
    paymentStatus: true
}


const plannedLessons = [lesson1, lesson2,lesson3, lesson4]

const teacher = {
    startTime: 9,
    endTime: 18,
    plannedLessons: plannedLessons
}

// Convert planned lessons to FullCalendar events
const lessonsEvents = teacher.plannedLessons.map(lesson => ({
    title: lesson.topic,
    start: lesson.startTime.toISOString(),
    end: lesson.endTime.toISOString(),
    backgroundColor: lesson.paymentStatus ? 'blue' : 'red',
    extendedProps: {
        student: lesson.student
    }
}));