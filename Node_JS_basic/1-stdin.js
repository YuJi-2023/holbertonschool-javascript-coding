const welcomeMessage = 'Welcome to Holberton School, what is your name?';
console.log(welcomeMessage);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('', (name) => {
  console.log(`Your name is: ${name}`);
  readline.close();
  console.log('This important software is now closing');
});
