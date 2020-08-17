
const express = require('express');
let router = express.Router();

router.route('/')
    .get(async (req, res) => {
        return res.status(200).json({ success: true, message: 'This is a private route' });
    });

module.exports = router;
