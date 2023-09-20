#!/usr/bin/node

const request = require('request');
// request URL
const url = process.argv[2];

request.get(url, (err, response) => {
  if (err) {
    console.log(err);
  } else {
    const code = response.statusCode;
    console.log(`code: ${code}`);
  }
});
