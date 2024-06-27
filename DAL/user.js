const USER = require("../Modals/userSchema");

// this is for create the user
const _user_create = async (body) => {
  const { name, email, password } = body;
  const newUser = new USER({
    name: name,
    email: email,
    password: password,
  });

  return await newUser.save();
};


module.exports = {
    _user_create
}
