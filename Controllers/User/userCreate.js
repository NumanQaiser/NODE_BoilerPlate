const { user_create } = require("../../Services/userServ");
const { bad_request } = require("../../Utilis/bad_request");
const { userCreateValidate } = require("../../Validators/userValid");

async function userCreate(req, res) {
  try {
    const isValidate = await userCreateValidate(req.body);
    if (isValidate.error) {
      return bad_request(isValidate.error, res);
    }

    const { data, error, error_message } = await user_create(req.body);
    if (error) {
      return res.status(400).send({
        message: error_message,
        success: false,
        error: error,
      });
    }

    if (data) {
      return res.status(200).send({
        message: "User created successfully!",
        success: true,
        data: data,
      });
    }
  } catch (e) {
    res.status(503).send({
      message: "Error into user Creation API ",
      success: false,
      error: e.message, // Use e.message to provide a readable error message
    });
  }
}

module.exports = {
  userCreate,
};
