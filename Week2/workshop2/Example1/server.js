/*const express = require("express");
const path = require("path");

const app = express();
const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("App listening to: " + port);
}); */


const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// In-memory array of quotes
let quotes = [
  "The best way to predict the future is to invent it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do not wait to strike till the iron is hot; but make it hot by striking."
];

// GET endpoint to return a random quote
app.get('/api/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

// Optional: POST endpoint to add a new quote
app.post('/api/quote', (req, res) => {
  const { quote } = req.body;
  if (!quote || typeof quote !== 'string') {
    return res.status(400).json({ error: 'Please provide a valid quote.' });
  }
  quotes.push(quote);
  res.json({ message: 'Quote added successfully.' });
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});