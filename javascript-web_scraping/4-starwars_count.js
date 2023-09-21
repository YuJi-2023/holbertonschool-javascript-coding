#!/usr/bin/node

const { count } = require('console');
const { forEach } = require('lodash');
const request = require('request');
// request URL
const apiUrl = 'https://swapi-api.hbtn.io/api/films/';
const charId = '18';

request.get(apiUrl, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    const movieData = JSON.parse(body);
    // movieResults is a list contains info of a list of characters url
    const movieResults = movieData.results;

    // initialize a counter
    let count = 0;

    movieResults.forEach(movie => {
      const characters = movie.characters;
      characters.forEach(charUrl => {
        if (charUrl.includes(`${charId}`)) {
          count++;
        }
      });
    });

    console.log(count);
  }
});
