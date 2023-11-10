const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:3333', 'https://nebula-coinflip.vercel.app'];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.get('/', (req, res, next) => {
  const apiKey = req.get('X-Api-Key');
  if (!apiKey) {
    return res.status(403).json({ error: "No API key supplied" });
  }
  if (apiKey !== message()) {
    return res.status(403).json({ error: "Invalid API key" });
  }
  return next();
}, (req, res) => {
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

function message() {
  const utcDate = new Date();
  const utcTimestamp = utcDate.getTime();
  const ud = "nebulacoinflip" + Math.floor(utcTimestamp / 120000).toString();
  const s = 3;

  let cc = "";
  for (let i = 0; i < ud.length; i++) {
    let char = ud[i];
    if (char.match(/[a-z]/i)) {
      const isUpperCase = char === char.toUpperCase();
      char = char.toLowerCase();
      let charCode = char.charCodeAt(0);
      charCode = ((charCode - 'a'.charCodeAt(0) + s) % 26) + 'a'.charCodeAt(0);
      if (isUpperCase) {
        charCode -= 32; // Convert back to uppercase
      }
      cc += String.fromCharCode(charCode);
    } else {
      cc += char;
    }
  }
  return cc;
}
