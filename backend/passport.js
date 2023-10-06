const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "403940930490-9p5upakgv7g8brgiignanr4frs6r3rsv.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

GITHUB_CLIENT_ID = "Iv1.6185e0c26f25211b";
GITHUB_CLIENT_SECRET = "281eeb9cb30021c34b774c21f048e9c73810c990";

passport.use(
    new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  },
  function (accessToken, refreshToken, profile, done) {
    done(null,profile );
  }
  )
);

passport.use(
    new GithubStrategy(
    {
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
    done(null, profile);
    }
    )
);

passport.serializeUser((user,done)=>{
    done(null,user);
});

passport.deserializeUser((user,done)=>{
    done(null,user);
});