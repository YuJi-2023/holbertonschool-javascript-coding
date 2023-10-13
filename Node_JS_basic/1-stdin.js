const readline = require('readline');

const line = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const welcomeMessage = 'Welcome to Holberton School, what is your name?';

line.question(`${welcomeMessage}\n`, (name) => {
  console.log(`Your name is: ${name}`);
  line.close();
});

line.on('close', () => {
  console.log('This important software is now closing');
});
