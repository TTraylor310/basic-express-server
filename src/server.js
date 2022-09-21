const express = require('express');

const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const validator = require('./middleware/validator');
const logger = require('./middleware/logger');

const PORT = process.env.PORT || 3002;

const app = express();

// app.use(validator);
app.use(logger);

app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to Tray home, Day 2');
});

app.get('/bad', (req, res, next) => {
  next('this is a bad route');
});


app.get('/person', validator, (req, res, next) => {
  let {named} = req.query;

  try{
    if(named){
      res.status(200).send(`{'name': ${named}}`);
    } else {
      res.status(200).send('Checkers 200');
    } 
  } catch (err) {
    next(err.message);
  }
  
  // next('this is a person');
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