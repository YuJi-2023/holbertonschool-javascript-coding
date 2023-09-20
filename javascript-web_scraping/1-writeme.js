#!/usr/bin/node

const fs = require('fs');
const filename = process.argv[2];
const strint_to_write = process.argv[3];

fs.writeFile(filename, strint_to_write, (err) => {
  if (err) {
    console.log(err);
  }
});