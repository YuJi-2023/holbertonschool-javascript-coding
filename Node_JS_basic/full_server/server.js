const express = require('express');

const routes = require('./routes/index');

const app = express();
const port = 1245;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Listening on port${port}`);
});

module.exports = app;
