"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Months_1 = require("./enums/Months");
const EvaluationResult_1 = require("./EvaluationResult");
const Exam_1 = require("./Exam");
const Student_1 = require("./Student");
const Subject_1 = require("./Subject");
const Work_1 = require("./Work");
const Teacher_1 = require("./Teacher");
console.log('--------------INDEX------------');
const newTeacher = new Teacher_1.Teacher('Thomas Ravache', new Date(1998, Months_1.Months.julho, 27), 3000, new Subject_1.Subject('Programação'));
const newStudent = new Student_1.Student('Jerônimo', new Date(2000, Months_1.Months.janeiro, 5));
const exam1 = new Exam_1.Exam(10, newTeacher);
const work1 = new Work_1.Work(10, newTeacher);
const examResult = new EvaluationResult_1.EvaluationResult(exam1, 7.5);
const workResult = new EvaluationResult_1.EvaluationResult(work1, 9);
newStudent.setEvaluationResults([examResult, workResult]);
console.log(`A média do ${newStudent.name} na matéria de ${newTeacher.subject.name} é: ${newStudent.sumAverageNotes()}`);
