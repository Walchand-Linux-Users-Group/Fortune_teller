// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/fortune', (req, res) => {
  const fortunes = [
    "Your path is clear, trust your instincts.",
    "The stars align in your favor today.",
    "A big opportunity is coming your way soon.",
    "Don't be afraid to take risks, they will pay off.",
    "The universe is guiding you towards success.",
    "Today, you will find the clarity you've been seeking.",
    "A great adventure is on the horizon for you.",
    "Someone close to you will soon offer help."
  ];
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.json({ fortune: randomFortune });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
