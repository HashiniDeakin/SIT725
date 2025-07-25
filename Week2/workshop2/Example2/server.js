const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to calculate square
app.get('/square', (req, res) => {
  const num = parseFloat(req.query.num);

  if (isNaN(num)) {
    return res.send("Error: Please provide a valid number using query parameter 'num'.");
  }

  const square = num * num;
  res.send(`The square of ${num} is: ${square}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
