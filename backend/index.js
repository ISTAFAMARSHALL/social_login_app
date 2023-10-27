import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';
import cors from 'cors';



const app = express();
const PORT = 3001; // Replace with your desired port

app.use(cors());
app.use(bodyParser.json());

const CLIENT_ID = 'Iv1.6185e0c26f25211b'; // Replace with your GitHub OAuth App's client ID
const CLIENT_SECRET = '772ef24c4351e6bcdbaa8520eb14d293e0bee287'; // Replace with your GitHub OAuth App's client secret
const REDIRECT_URI = 'http://localhost:3001/callback'; // Replace with your callback URL
const DIRECT_URI = 'http://localhost:3000/callback'; // Replace with your callback URL

app.get('/login', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user`);
});

app.get('/callback', async (req, res) => {
  const code = req.query.code;
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: code,
    redirect_uri: DIRECT_URI,
  });

  try {
    const response = await fetch(`https://github.com/login/oauth/access_token?${params.toString()}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send('Error logging in');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const cookieSession = require("cookie-session");
// const express = require("express");
// const cors = require("cors")
// const passportSetup = require("./passport")
// const passport = require("passport");
// const authRoute = require("./routes/auth")
// const app = express();



// app.use(
//     cookieSession({name:"session", keys:["openreplay"], maxAge: 24 * 60 * 60 * 100,})
// );

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
//   })
// );

// app.use("/auth", authRoute);

// app.listen("3001", ()=>{
//     console.log("server is running!")
// })