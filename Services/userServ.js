const { _user_create } = require("../DAL/user");
const { res } = require("../Utilis/reponseObj");


// This is used for creation the user account
const user_create = async (body) => {
  const respone = await _user_create(body);

  if (!respone) {
    res.error = true;
    res.error_message = "User can't be created Or Already Exist";
    return res;
  }
  else {
      res.data = respone;
      return res;

  }
};

module.exports = {
  user_create,
};
