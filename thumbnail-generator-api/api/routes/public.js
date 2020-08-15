
const express = require('express');
let router = express.Router();

router.route('/')
    .get(async (req, res) => {
        return res.status(200).json({ success: true, version: '1.0.0' });
    });

module.exports = router;
