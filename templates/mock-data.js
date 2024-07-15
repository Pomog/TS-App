const student1 ={
    name : "student 1",
    email : "student1@mail.com"
}

const student2 ={
    name : "student 2",
    email : "student2@mail.com"
}

const lesson1 = {
    startTime : new Date(2024, 0, 1, 10,0),
    endTime : new Date(2024, 0, 1, 11,0),
    student : student1
}

const lesson2 = {
    startTime : new Date(2024, 0, 2, 13,0),
    endTime : new Date(2024, 0, 2, 15,0),
    student : student1}

const lesson3 = {
    startTime : new Date(2024, 0, 1, 11,0),
    endTime : new Date(2024, 0, 1, 12,0),
    student : student2
}



const plannedLessons = [lesson1, lesson2, lesson3]

const teacher ={
    startTime : 9,
    endTime : 18,
    plannedLessons : plannedLessons
}