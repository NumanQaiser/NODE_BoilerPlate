const user = require("./route_objects/userRoute");

const routes = (app) => {
  app.use("/user", user);
};

module.exports = {routes};
