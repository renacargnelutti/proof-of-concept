
const errorMiddleware = (err, req, res, next) => {
    if (err.code === 'LIMIT_FILE_SIZE') {
        res.status(413).json({ success: false, error: 'File too large' });
        return;
    }
    else if (err.code === 'WRONG_MIMETYPE') {
        res.status(415).json({ success: false, error: 'Unsopported media type' });
        return;
    }

    next();
  }

module.exports = {
    errorMiddleware,
};
