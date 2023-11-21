function authUser(req, res, next) {
  if (req.user == null) {
    return res.status(403).send("You need to signIn..");
  }
  next();
}

function authRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      res.status(401).send("Unauthorised");
    }
    next();
  };
}

module.exports = { authUser, authRole };
