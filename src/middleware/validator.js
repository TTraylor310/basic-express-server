'use strict';

module.exports = (req, res, next) => {

  if (req.query.name) {
    next();
  } else {
    next ('Name required when looking for a person.');
  }
};
