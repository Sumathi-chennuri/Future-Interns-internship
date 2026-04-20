const express = require('express');
const app = express();

app.use(express.json());

let leads = [];

app.post('/add', (req, res) => {
    leads.push(req.body);
    res.send("Added");
});

app.get('/all', (req, res) => {
    res.json(leads);
});

app.listen(3000, () => console.log("Server running"));
