import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoute from './routes/userRoute.js';  // Note the .js extension
import { message } from './function.js';
const app = express();

// const userRoute = require('./routes/userRoute')
const whitelist = ['http://localhost:3333', 'https://nebula-coinflip.vercel.app']; // Add any other allowed origins

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors(corsOptions));
app.get('/', (req, res, next) => {
  const apiKey = req.get('X-Api-Key');
  if (!apiKey) {
    return res.status(403).json({ error: "No API key supplied" });
  }
  if (apiKey !== message()) { // Replace expected-api-key-value with the actual API key you expect
    return res.status(403).json({ error: "Invalid API key" });
  }
  return next();
},
  (req, res) => {
    res.set({
      'Content-Security-Policy': "default-src 'self'",
      'X-Frame-Options': 'DENY',
      'Strict-Transport-Security': 'max-age=86400; includeSubDomains',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
    });

    res.json({ key: 'shadow unaware voice ecology chicken firm express hood apple spray write borrow alcohol scatter early' });
  });

const port = 4444;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
