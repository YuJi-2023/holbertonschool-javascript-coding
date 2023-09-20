#!/usr/bin/node

const fs = require('fs');
const filename = process.argv[2];
const stringtowrite = process.argv[3];

fs.writeFile(filename, stringtowrite, (err) => {
  if (err) {
    console.log(err);
  }
});
