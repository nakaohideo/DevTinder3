const User = require("../database/models/user");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    session: false
  },
  function(username, password, done) {
    User.findOne({ email: username }, (err, user) => {
      if (err) {
        return done("local strat error", err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (!user.checkPassword(password)) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    });
  }
);

module.exports = strategy;
