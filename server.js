const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/token', (req, res) => {
    const now = Date.now();
    res.json({
        tokenid: uuidv4().replace(/-/g, ''),
        date: now,
        txnid: uuidv4()
    });
});

app.listen(PORT, () => console.log(`Token API running on port ${PORT}`));
