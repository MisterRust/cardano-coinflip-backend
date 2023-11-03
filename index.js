const express = require('express');
const cors = require('cors');
const app = express();

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

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({ key: 'shadow unaware voice ecology chicken firm express hood apple spray write borrow alcohol scatter early' });
});

const port = 4444;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
