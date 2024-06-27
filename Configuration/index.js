const env = process.env.NODE_ENV;

// check the valid environment values
if (env == "development" || env == "production") {
  console.log("Server running into ", env);
  const config = require("./config.json");
  const values = config[env];
  Object.keys(values).map((key) => {
    process.env[key] = values[key];
  });
}
else {
    console.log("Server environment is not defined")
}
