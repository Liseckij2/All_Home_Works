function Student(name, faculty, marks) {
  this.name = name;
  this.faculty = faculty;
  this.marks = marks;
  this.getAvgMark = function () {
    return Math.round(this.marks.reduce((a, b) => a + b) / this.marks.length);
  };
  this.getMaxMark = function () {
    return Math.round(this.marks.reduce((a, b) => (a < b ? b : a)));
  };
  this.getMinMark = function () {
    return Math.round(this.marks.reduce((a, b) => (a < b ? a : b)));
  };
  this.getTotal = function () {
    return this.marks.reduce((a, b) => a + b);
  };
  this.getInfo = function () {
    return `
  name:    ${this.name}
  faculty: ${(this.faculty = faculty)}
  marks:   ${(this.marks = this.getMaxMark())}`;
  };
};
const student = new Student("BOB", "DOCTOR", [50, 30, 60, 80, 50])
console.log(student.getAvgMark());     // средняя оценка студента
console.log(student.getMaxMark());     // максимальная оценка
console.log(student.getMinMark());     // минимальная оценка
console.log(student.getTotal());       // сумма оценок
console.log(student.getInfo());        // информация о студенте в виде name + faculty + total


// const studentGetAvgMark = new Student("BOB", "DOCTOR", [50, 50, 50, 50, 50]);
// console.log(studentGetAvgMark.getAvgMark()); // средняя оценка студента

// const studentGetMaxMark = new Student(
//   "alex",
//   "automate engineer",
//   [10, 12, 21, 21, 300]
// );
// console.log(studentGetMaxMark.getMaxMark()); // максимальная оценка

// const studentGetMinMark = new Student("ron", "director", [10, 22, 100, 0, 25]);
// console.log(studentGetMinMark.getMinMark()); // минимальная оценка

// const studentGetTotal = new Student("philip", "profesor", [1, 2, 400, 5, 5]);
// console.log(studentGetTotal.getTotal()); // сумма оценок

// const conststudentGetInfo = new Student("noname", "info", [23, 34, 54, 65, 54]);
// console.log(conststudentGetInfo.getInfo()); // информация о студенте в виде name + faculty + total

// class Student {
//   constructor(name, faculty, marks) {
//     this.name = name;
//     this.faculty = faculty;
//     this.marks = marks;
//   }
//   getTotal() {
//     return this.marks.reduce((a, b) => a + b);
//   }
//   getAvgMark() {
//     return this.getTotal() / this.marks.length;
//   }
//   getMaxMark() {
//     return Math.max.apply(Math, this.marks);
//   }
//   getMinMark() {
//     return Math.min.apply(Math, this.marks);
//   }
//   getInfo() {
//     // return this.name + " " + this.faculty + " " + this.getTotal();
//     return `${this.name} ${this.faculty} ${this.getTotal()}`;
//   }
// }

// const student = new Student("vasyl", "faculty", [2, 3, 4, 10, 2, 4]);

// console.log(student.getAvgMark()); // средняя оценка студента
// console.log(student. getMaxMark()); // максимальная оценка
// console.log(student.getMinMark()); // минимальная оценка
// console.log(student.getTotal()); // сумма оценок
// console.log(student.getInfo()); // информация о студенте в виде name + faculty + total
