const jwt = require("jsonwebtoken");

// this is used for authenticate user on the based of token
const authenticate = async (req, res, next) => {
  const token = req.header("token");
  if (!token) {
    res.status(401).send();
  } else {
    const userToken = jwt.verify(token, process.env.JWT_KEY);

    // here match the token form your user session
    //if user token not valid
    // return and throw error
    //is valid
    // user.token=userToken.decoded
    //afterwards

    // this is for moving towards next controller
    next();
  }
};

module.exports = authenticate;
