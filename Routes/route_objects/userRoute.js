const { userCreate } = require("../../Controllers/User/userCreate");
const route_registeration = require("../../Utilis/route_registeration");

const router = require("express").Router();

route_registeration({
  router,
  route: "/create",
  user_auth_unable: false,
  post: userCreate,
});
module.exports = router;
