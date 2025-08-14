const express = require('express');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('public'));

// API Endpoint: /square/:number
app.get('/square/:number', (req, res) => {
  const num = parseInt(req.params.number);
  if (isNaN(num)) {
    return res.status(400).send({ error: 'Invalid number' });
  }

  const result = num * num;
  res.send({ number: num, square: result });
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});