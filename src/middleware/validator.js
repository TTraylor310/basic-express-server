'use strict';

const validator = (req, res, next) => {
  console.log(`Request: ${req}`);
  next();
};

module.exports = validator;
