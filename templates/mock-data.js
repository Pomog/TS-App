const student1 = {
    name: "student 1",
    email: "student1@mail.com"
}

const student2 = {
    name: "student 2",
    email: "student2@mail.com"
}

const day = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();

const lesson1 = {
    topic: "People and Cultures",
    startTime: new Date(year, month, day, 10, 0),
    endTime: new Date(year, month, day, 11, 0),
    student: student1,
    paymentStatus: true
}

const lesson2 = {
    topic: "House and Home",
    startTime: new Date(year, month, day, 13, 0),
    endTime: new Date(year, month, day, 18, 0),
    student: student1,
    paymentStatus: true
}

const lesson3 = {
    topic: "Slang and Colloquial Language",
    startTime: new Date(year, month, day, 11, 30),
    endTime: new Date(year, month, day, 12, 30),
    student: student2,
    paymentStatus: false
}

const lesson4 = {
    topic: "Slang and Colloquial Language",
    startTime: new Date(2024, month, day+1, 11, 30),
    endTime: new Date(2024, month, day+1, 16, 15),
    student: student2,
    paymentStatus: true
}


const lessons = [lesson1, lesson2,lesson3, lesson4]

const teacher = {
    startTime: 9,
    endTime: 18,
    lessons: lessons
}

