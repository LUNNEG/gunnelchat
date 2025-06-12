const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontpage.html');
});

app.post('/submit', (req, res) => {
    if (!req.body || typeof req.body !== 'object') {
        return res.status(400).json({ error: 'Invalid request body' });
    }
    const name = req.body.name;
    const message = req.body.message;
    if (!name) {
        return res.json({ name: '', message: 'Error: Name is required.' });
    }
    res.json({ name, message });

});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});