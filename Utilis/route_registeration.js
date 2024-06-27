const authenticate = require("../Middlewares/authenticate");

const route_registeration = ({
  router = undefined,
  route = undefined,
  user_auth_unable = false,
  get = undefined,
  post = undefined,
  put = undefined,
  del = undefined,
}) => {
  const args = [route]; // ["/user"]
  if (user_auth_unable) {
    args.push(authenticate); //["/user" ,authenticate]
  }
  if (post) {
    router.post(...args, post); //["/user" ,authenticate , userCreate]
  }
  if (get) {
    router.get(...args, get);
  }
};

module.exports = route_registeration;
