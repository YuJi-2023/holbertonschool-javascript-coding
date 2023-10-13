const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    // get the file data
    const fileContent = fs.readFileSync(path, 'utf-8');

    // parse the data
    const rows = fileContent.split('\n').map((row) => row.split(','));
    // remove the header
    rows.shift();

    // initialize and count each field
    let field1 = 0;
    let field2 = 0;
    const csStudents = [];
    const sweStudents = [];

    for (const row of rows) {
      const [firstname, , , field] = row;
      const student = `${firstname}`;

      if (field === 'CS') {
        field1 += 1;
        csStudents.push(student);
      } else if (field === 'SWE') {
        field2 += 1;
        sweStudents.push(student);
      }
    }
    const numberOfStudents = rows.length;
    console.log(`Number of students: ${numberOfStudents}`);
    console.log(`Number of students in CS: ${field1}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${field2}. List: ${sweStudents.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
