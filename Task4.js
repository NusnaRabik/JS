const students = [
    {name: "Kavindu", age: 21, faculty: "Computing"},
    {name: "Nimesha", age: 22, faculty: "Engineering"},
    {name: "Dinuka", age: 23, faculty: "Business"}
];

students.forEach(s => console.log(s.name));

const olderStudents = students.filter(s => s.age > 21);
console.log("Students older than 21:", olderStudents);

const faculties = students.map(s => s.faculty);
console.log("Faculty names:", faculties);

const classroom = {
    className: "IT2025",
    teacher: "Mr. Perera",
    students: [
        {name: "Kavindu", age: 21},
        {name: "Nimesha", age: 22},
        {name: "Dinuka", age: 23}
    ]
};

console.log("Teacher:", classroom.teacher);

classroom.students.push({name: "Sajith", age: 24});

classroom.students.forEach(s => console.log(s.name));

