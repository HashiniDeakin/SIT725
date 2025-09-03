const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Invalid input");
    }

    const sum = a + b;
    res.send(`The sum of ${a} and ${b} is: ${sum}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});