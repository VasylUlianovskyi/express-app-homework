module.exports.taskPaginate = (req, res, next) => {
  let { page = 1, results = 10 } = req.query;

  page = Math.max(1, parseInt(page, 10));
  results = Math.max(1, parseInt(results, 10));

  if (isNaN(page) || page < 1) {
    page = 1;
  }

  if (isNaN(results) || results < 1) {
    results = 10;
  }

  req.pagination = {
    page,
    results,
    offset: (page - 1) * results,
  };

  next();
};
