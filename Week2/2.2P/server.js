const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = num1 + num2;
    res.send(`Result: ${result}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});