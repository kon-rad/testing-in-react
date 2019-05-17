const Users = require('../models/user');

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password' });
  }

  // serach if email already exists in Users
  Users.findOne({ email: email }), function(err, existingUser) {
    // if user exists, return error
    if (existingUser) {
      return res.status(422).send({ error: 'Email in use' });
    }
    // if user doesn't exist, create user
    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err) {
      if (err) return next(err);

      res.json({ success: true });
    })
  };
};
