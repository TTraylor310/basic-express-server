'use strict';

module.exports = (error, req, res, next) => {
  console.log('500 error: ', error);
  res.status(500).send({
    error: 500,
    route: req.path,
    query: req.query,
    body: req.body,
    message: typeof(error) === 'string' ? error : `ServerError: ${error.message}`,
  });
  next();
};
