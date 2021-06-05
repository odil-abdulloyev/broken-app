const {Router} = require('express');
const router = Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../db').import('../models/user');

router.post('/signup', async (req, res) => {
  const { username } = req.body.user;
  try {
    if (await User.findOne({ where: { username } })) {
      return res.status(400).send({ error: `User with username ${username} exists` });
    }
    const user = await User.create({
      full_name: req.body.user.full_name,
      username,
      passwordHash: bcrypt.hashSync(req.body.user.password, 10),
      email: req.body.user.email,
    });
    const token = jwt.sign({id: user.id}, 'lets_play_sum_games_man', {expiresIn: 60 * 60 * 24});
    res.status(200).json({
      user,
      token
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/signin', async (req, res) => {
  try {
    const user = await User.findOne({where: {username: req.body.user.username}});
    if (user) {
      bcrypt.compare(req.body.user.password, user.passwordHash, function (err, matches) {
        if (matches) {
          const token = jwt.sign({id: user.id}, 'lets_play_sum_games_man', {expiresIn: 60 * 60 * 24});
          res.json({
            user,
            message: 'Successfully authenticated.',
            sessionToken: token
          });
        } else {
          res.status(502).send({error: 'Passwords do not match.'})
        }
      });
    } else {
      res.status(403).send({error: 'User not found.'})
    }
  } catch (err) {
    res.status(500).send({error: err.message});
  }
});

module.exports = router;