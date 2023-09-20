#!/usr/bin/node

const fs = require('fs');
const filename = process.argv[2];
const Strint_To_Write = process.argv[3];

fs.writeFile(filename, Strint_To_Write, (err) => {
  if (err) {
    console.log(err);
  }
});