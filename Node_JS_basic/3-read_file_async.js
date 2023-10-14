const fsPromises = require('fs').promises;

module.exports = async function countStudents(path) {
  try {
    // get the file data
    const fileContent = await fsPromises.readFile(path, 'utf-8');
    // parse the data into arrays of substrings, trim whitespaces and filter out empty lines
    const rows = fileContent.split('\n').filter((row) => row.trim() !== '');
    // remove the header line
    rows.shift();
    // parse each row into subarrays base on separator comma to get each value
    const studentsData = rows.map((row) => row.split(','));
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
    console.log(`Number of students: ${numberOfStudents}`);
    console.log(`Number of students in CS: ${csList.length}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${sweList.length}. List: ${sweList.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
