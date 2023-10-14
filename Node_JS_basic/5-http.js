const http = require('http');
const fsPromises = require('fs').promises;

async function countStudents(path) {
  try {
    const fileContent = await fsPromises.readFile(path, 'utf-8');
    // parse the data into arrays of substrings, trim whitespaces and filter out empty lines
    const rows = fileContent.split('\n').filter((row) => row.trim() !== '');
    // remove the header line and parse each row into subarrays
    const studentsData = rows.slice(1).map((row) => row.split(','));
    const numberOfStudents = studentsData.length;
    // initialize counter and loop through to populate the returning lists respectively
    const csList = [];
    const sweList = [];

    for (let count = 0; count < numberOfStudents; count += 1) {
      if (studentsData[count][3] === 'CS') {
        csList.push(studentsData[count][0]);
      } else if (studentsData[count][3] === 'SWE') {
        sweList.push(studentsData[count][0]);
      }
    }
    return (`Number of students: ${numberOfStudents}\nNumber of students in CS: ${csList.length}. List: ${csList.join(', ')}\nNumber of students in SWE: ${sweList.length}. List: ${sweList.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  const path = process.argv[2];
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const message = 'This is the list of our students:\n';
    try {
      // call countStudents function and send results to response
      const result = await countStudents(path);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(message + result);
    } catch (error) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end(message + error.message);
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});

module.exports = app;
