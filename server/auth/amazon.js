const passport = require('passport')
const router = require('express').Router()
const AmazonStrategy = require('passport-amazon').Strategy
const {User} = require('../db/models')
require('../../secrets')
module.exports = router

// passport.use(new AmazonStrategy({
//     clientID: process.env.AMAZON_CLIENT_ID,
//     clientSecret: process.env.AMAZON_CLIENT_SECRET,
//     callbackURL: "http://localhost:5000/auth/amazon/callback"
//   },

//   function(accessToken, refreshToken, profile, done) {
//     User.findOrCreate({ amazonId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
//   ));

passport.serializeUser(function(user, cb) {
  cb(null, user)
})

passport.deserializeUser(function(user, cb) {
  cb(null, user)
})

const amazonConfig = {
  clientID: process.env.AMAZON_CLIENT_ID,
  clientSecret: process.env.AMAZON_CLIENT_SECRET,
  callbackURL: 'http://localhost:5000/auth/amazon/callback'
}

const strategy = new AmazonStrategy(
  amazonConfig,
  (accessToken, refreshToken, profile, done) => {
    const amazonId = profile.id
    const email = profile.emails[0].value

    console.log(amazonId, email)

    User.findOrCreate({
      where: {amazonId},
      defaults: {email}
    })
      .then(([user]) => done(null, user))
      .catch(done)
  }
)

passport.use(strategy)

router.get('/', passport.authenticate('amazon', {scope: ['profile']}))

router.get(
  '/callback',
  passport.authenticate('amazon', {
    failureRedirect: '/login',
    successRedirect: '/home'
  })
)
