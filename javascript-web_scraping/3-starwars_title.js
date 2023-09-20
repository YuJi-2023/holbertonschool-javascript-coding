#!/usr/bin/node

const request = require('request');
// request URL
const movieId = process.argv[2];
const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request.get(apiUrl, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    const movieData = JSON.parse(body);
    const movieTitle = movieData.title;
    console.log(movieTitle);
  }
});
