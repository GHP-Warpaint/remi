const passport = require('passport')
const router = require('express').Router()
const AmazonStrategy = require('passport-amazon').Strategy
const {User} = require('../db/models')
require('../../secrets')
module.exports = router

passport.serializeUser(function(user, cb) {
  cb(null, user)
})

passport.deserializeUser(function(user, cb) {
  cb(null, user)
})

const amazonConfig = {
  clientID: process.env.AMAZON_CLIENT_ID,
  clientSecret: process.env.AMAZON_CLIENT_SECRET,
  callbackURL: process.env.AMAZON_CALLBACK_URL
}

const strategy = new AmazonStrategy(
  amazonConfig,
  (accessToken, refreshToken, profile, done) => {
    const amazonId = profile.id
    const email = profile.emails[0].value
    const firstName = profile.displayName

    User.findOrCreate({
      where: {amazonId},
      defaults: {email, firstName}
    })
      .then(([user]) => done(null, user))
      .catch(done)
  }
)

passport.use(strategy)

router.get(
  '/',
  passport.authenticate('amazon', {
    scope: ['profile']
  })
)

router.get(
  '/callback',
  passport.authenticate('amazon', {
    failureRedirect: '/login',
    successRedirect: '/home'
  })
)
