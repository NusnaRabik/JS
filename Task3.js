const student = {
    name: "Kavindu",
    age: 21,
    faculty: "Computing",
    subjects: ["Web Development", "Database Systems", "Programming"]
};

console.log("Name:", student.name);
console.log("Faculty:", student.faculty);

student.year = 2025;

student.age = 22;

student.subjects.forEach(sub => console.log(sub));
