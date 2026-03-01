const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const DB_PATH = path.join(__dirname, 'db.json');

function loadDb() {
  if (!fs.existsSync(DB_PATH)) {
    return { courses: [], students: [] };
  }
  const data = fs.readFileSync(DB_PATH, 'utf-8');
  if (!data) {
    return { courses: [], students: [] };
  }
  return JSON.parse(data);
}

function saveDb(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

let db = loadDb();

// Courses
/*
app.get('/courses', (req, res) => {
  res.json(db.courses);
});
*/

app.get('/courses', (req, res) => {
  const data = db;
  let courses = data.courses;
  if (req.query.description) {
    const descriptionFilter = req.query.description.toLowerCase();
    courses = courses.filter(c => c.description.toLowerCase().includes(descriptionFilter));
  }
  res.json(courses);
});

app.get('/courses/:id', (req, res) => {
  const course = db.courses.find(c => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).json({ error: 'Course not found' });
  }
  res.json(course);
});

app.post('/courses', (req, res) => {
  const newCourse = req.body;
  if (!newCourse || !newCourse.id) {
    return res.status(400).json({ error: 'Course object with unique id required' });
  }
  if (db.courses.find(c => c.id === newCourse.id)) {
    return res.status(409).json({ error: 'Course with that id already exists' });
  }
  db.courses.push(newCourse);
  saveDb(db);
  res.status(201).json(newCourse);
});

// Students
app.get('/students', (req, res) => {
  res.json(db.students);
});

app.get('/students/:id', (req, res) => {
  const student = db.students.find(s => s.id === parseInt(req.params.id));
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }
  res.json(student);
});

app.post('/students', (req, res) => {
  const newStudent = req.body;
  if (!newStudent || !newStudent.id) {
    return res.status(400).json({ error: 'Student object with unique id required' });
  }
  if (db.students.find(s => s.id === newStudent.id)) {
    return res.status(409).json({ error: 'Student with that id already exists' });
  }
  newStudent.enrolledCourses = newStudent.enrolledCourses || [];
  db.students.push(newStudent);
  saveDb(db);
  res.status(201).json(newStudent);
});

app.post('/students/:id/courses', (req, res) => {
  const student = db.students.find(s => s.id === parseInt(req.params.id));
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }
  const { courseId } = req.body;
  if (!courseId) {
    return res.status(400).json({ error: 'courseId required in body' });
  }
  if (!db.courses.find(c => c.id === courseId)) {
    return res.status(404).json({ error: 'Course not found' });
  }
  if (!student.enrolledCourses.includes(courseId)) {
    student.enrolledCourses.push(courseId);
    saveDb(db);
  }
  res.json(student);
});

app.get('/courses/:id/students', (req, res) => {
  const courseId = parseInt(req.params.id);
  if (!db.courses.find(c => c.id === courseId)) {
    return res.status(404).json({ error: 'Course not found' });
  }
  const students = db.students.filter(s => s.enrolledCourses && s.enrolledCourses.includes(courseId));
  res.json(students);
});

// start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
