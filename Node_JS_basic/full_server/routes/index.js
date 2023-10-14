const express = require('express');

const router = express.Router();
const appC = require('../controllers/AppController');
const stuC = require('../controllers/StudentsController');

// link '/' to  AppController
router.get('/', appC.getHomepage);

// link '/students' to StudentsController
router.get('/students', stuC.getAllStudents);

// link '/students/:major' to StudentsController
router.get('/students/:major', stuC.getAllStudentsByMajor);

module.exports = router;
