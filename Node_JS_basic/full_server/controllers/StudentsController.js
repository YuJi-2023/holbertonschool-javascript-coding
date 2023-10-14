const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    const path = process.argv[2];
    try {
      const databaseReturn = await readDatabase(path);
      const message = 'This is the list of our students';
      response.statusCode = 200;
      response.end(`${message}\nNumber of students in CS: ${databaseReturn[0].length}. List: ${databaseReturn[0].join(', ')}\nNumber of students in SWE: ${databaseReturn[1].length}. List: ${databaseReturn[1].join(', ')}`);
    } catch (error) {
      response.statusCode = 500;
      response.end(error.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const path = process.argv[2];
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.setHeader('Content-Type', 'text/plain');
      response.end('Major parameter must be CS or SWE');
    }

    try {
      const databaseReturn = await readDatabase(path);
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      if (major === 'CS') {
        response.end(`List: ${databaseReturn[0].join(', ')}`);
      } else {
        response.end(`List: ${databaseReturn[1].join(', ')}`);
      }
    } catch (error) {
      response.statusCode = 500;
      response.setHeader('Content-Type', 'text/plain');
      response.end(error.message);
    }
  }
}

module.exports = StudentsController;
