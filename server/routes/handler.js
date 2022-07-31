const express = require('express');
const router = express.Router();

router.get('/BackendData', (req, res) => {
    const str = [
        {
            "name": 'Joe',
            "email": "email",
            "phone": "589-8576"
        }
    ];
    res.end(JSON.stringify(str));
});

router.post('/addBackendData', (req, res) => {
    res.end('NA');
});

module.exports = router;