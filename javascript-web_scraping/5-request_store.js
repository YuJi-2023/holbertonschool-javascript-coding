#!/usr/bin/node

const fs = require('fs');
const request = require('request');
const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    const data = body;
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.log(err);
      }
    });
  };
});
