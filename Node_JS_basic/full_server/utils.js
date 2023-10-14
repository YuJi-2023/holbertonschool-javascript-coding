// usually contains helper functions
const fsPromises = require('fs').promises;

async function readDatabase(path) {
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
    return [csList, sweList];
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
