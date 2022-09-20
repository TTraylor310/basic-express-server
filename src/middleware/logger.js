'use strict';

function logger (req, res, next) {
  console.log(`Request: ${req.method}, ${req.originalUrl}`);
  next();
}

module.exports = logger;
