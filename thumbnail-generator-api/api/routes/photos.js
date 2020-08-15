
const express = require('express');
let router = express.Router();
const sharp = require('sharp');

const sizes = [
    { width: 400, height: 300 },
    { width: 160, height: 120 },
    { width: 120, height: 120 },
];

router.route('/')
    .post(async (req, res) => {

        try {
            const file = req.file;
            let filenames = [];

            if (!file) return res.status(400).json({ success: false, error: 'Bad request' });

            await Promise.all(
                sizes.map(async (size) => {
                    let newFilename = `${size.width}X${size.height}_${file.filename}`;
                    await sharp(file.path)
                        .resize(size.width, size.height)
                        .toFile(`${file.destination}/${newFilename}`);

                    filenames.push(newFilename);
                })
            );

            res.json({ success: true, filenames });
        }
        catch (err) {
            return res.status(500).json({ success: false, error: 'Internal server error' });
        }

    });

module.exports = router;
