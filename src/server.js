const express = require('express');

const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
// const validator = require('./middleware/validator');
// const logger = require('./middleware/logger');

const PORT = process.env.PORT || 3002;

const app = express();

// app.use(validator);
// app.use(logger);


app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to Tray home, Day 2');
});


//Expects a query string from the user with a “name” property
// When present, output JSON to the client with this shape: { name: "name provided" }
// Without a name in the query string, force a “500” error

app.get('/person', (req, res, next) => {
  next('this is person');
});



app.use('*', notFound);
app.use(errorHandler);

function start () {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start};





// JSDoc stuff?
// /**
//  *
//  * @param {*} name
//  * @returns
//  */

// function greet (name) {
//   return `Hello ${name}`;
// }