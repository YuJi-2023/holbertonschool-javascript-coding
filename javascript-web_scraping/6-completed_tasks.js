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
    let completedTasksExist = false;
    userData.forEach(user => {
      const userId = user.userId;
      const completeStatus = user.completed === true;

      if (!userCounts[userId]) {
        userCounts[userId] = 0;
      }
      if (completeStatus === true) {
        userCounts[userId]++;
        completedTasksExist = true;
      }
    });
    if (completedTasksExist) {
      console.log(userCounts);
    } else {
      console.log({});
    }
  }
});
