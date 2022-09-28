'use strict';

function logger (req, res, next) {
  console.log(`Request Logger: ${req.method}, ${req.originalUrl}`);
  next();
}

module.exports = logger;
