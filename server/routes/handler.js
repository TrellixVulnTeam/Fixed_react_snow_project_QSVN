const express = require('express');
const router = express.Router();

router.get('/BackendData', (req, res) => {
    const str = [
        {
            "name": 'Joe',
            "email": "Joe12@gmail.com",
            "phone": "589-8576",
            "skill_level": "amatuer",
            "gender": "male"
        },
        {
            "name": 'Jolie',
            "email": "Jolie78@outlook.com",
            "phone": "457-2398",
            "skill_level": "proficient",
            "gender": "female"
        },
        {
            "name": 'Mark',
            "email": "Mark34@outlook.com",
            "phone": "634-9868",
            "skill_level": "expert",
            "gender": "male"
        },
    ];
    res.end(JSON.stringify(str));
});

router.post('/addBackendData', (req, res) => {
    res.JSON('NA');
});

module.exports = router;