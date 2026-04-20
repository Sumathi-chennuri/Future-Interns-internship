const express = require('express');
const app = express();
app.use(express.json());

let leads = [];

app.get('/leads', (req, res) => {
    res.json(leads);
});

app.post('/leads', (req, res) => {
    leads.push(req.body);
    res.send("Lead Added");
});

app.listen(3000, () => console.log("Server running on port 3000"));
