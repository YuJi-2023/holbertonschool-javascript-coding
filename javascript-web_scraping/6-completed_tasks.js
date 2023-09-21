#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

request.get(apiUrl, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    const userData = JSON.parse(body);

    // userCounts to store the counts for each user
    const userCounts = {};

    userData.forEach(user => {
      const userId = user.userId;
      // check if todo is true
      const completeStatus = user.completed === true;
      // initialize the count
      if (!userCounts[userId]) {
        userCounts[userId] = 0;
      }
      if (completeStatus === true) {
        userCounts[userId]++;
      }
    })
    console.log(userCounts);
  }
});
