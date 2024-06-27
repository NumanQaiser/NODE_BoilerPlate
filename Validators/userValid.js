const Joi = require("joi");

const userCreateValidate = async (body) => {
  const schema = Joi.object({
    name: Joi.string().required().trim(),
    email: Joi.string().required().email({ minDomainSegments: 2 }).trim(),
    password: Joi.string().required().min(5).max(25).trim(),
  });

  return schema.validate(body);
};

module.exports = {
  userCreateValidate,
};
