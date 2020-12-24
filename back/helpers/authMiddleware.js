const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./config/.env" });

const authMiddleware = (req, res, next) => {
  let token = req.header("auth-token");
  if (!token) {
    res.status(401).json({ errors: [{ msg: `Vous n'etes pas autorisé` }] });
  } else {
    jwt.verify(token, process.env.SECRET, (err, payload) => {
      if (err) throw err;
      req.userId = payload.userId;
      next();
    });
  }
};
module.exports = authMiddleware;
