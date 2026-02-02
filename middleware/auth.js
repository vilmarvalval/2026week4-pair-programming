function loggingMiddleware(req, res, next) {
  console.log(`${new Date().toISOString()}: ${req.originalUrl}`);
  next();
}

function authorizeUsersAccess(req, res, next) {
  if (req.query.admin === "true") {
    req.admin = true;
    next();
  } else {
    res.status(403).send("ERROR: You must be an admin");
  }
}

module.exports = loggingMiddleware;
module.exports.authorizeUsersAccess = authorizeUsersAccess;