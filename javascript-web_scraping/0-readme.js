#!/usr/bin/node
const fs = require('fs');
const args = process.argv[2];
fs.readFile(args, 'utf-8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
});