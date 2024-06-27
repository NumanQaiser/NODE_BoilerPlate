require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet")
require("./Configuration/index");
require("./Database/mongoose")
const express = require("express");
const bodyParser = require("body-parser");
const { routes } = require("./Routes/route");
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
    parameterLimit: 1000,
    limit: "10mb",
  })
);

// api routes register
routes(app);

module.exports = app
