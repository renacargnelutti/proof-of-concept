
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const multer = require('multer');
const swaggerUI = require('swagger-ui-express');

const { swaggerDocument } = require('./docs/swagger');
const { errorMiddleware } = require('./middlewares/errors');

const enableCORS = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length');
    next();
};
app.use(enableCORS);
app.use(helmet());

app.use(bodyParser.json({ limit: '5mb' }));
app.use(morgan('dev'));

const storage = multer.diskStorage({
    destination: __dirname + '/uploads',
    filename: (req, file, callback) => { callback(null, Date.now() + '_' + file.originalname) },
});
const limits = { fileSize: 1024 * 1024 * 5 };
const fileFilter = (req, file, cb) => {
    const allowedMimetypes = ['image/jpeg', 'image/png'];
    if (allowedMimetypes.indexOf(file.mimetype) === -1) {
        return cb({ code: 'WRONG_MIMETYPE' }, false);
    }

    cb(null, true);
}

app.use(multer({ storage, limits, fileFilter }).single('file'));
app.use(errorMiddleware);

app.use('/api/v1', require('./routes/public'));
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/api/v1/photos', require('./routes/photos'));

app.listen(process.env.API_PORT || 45000);
console.log(`Thumbnail API listening on ${process.env.API_PORT}`);

module.exports = app;
