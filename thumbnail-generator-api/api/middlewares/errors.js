
const errorMiddleware = (err, req, res, next) => {
    if (err.code === 'LIMIT_FILE_SIZE') {
        res.status(413).json({ success: false, error: 'File too large' });
        return;
    }
    else if (err.code === 'WRONG_MIMETYPE') {
        res.status(415).json({ success: false, error: 'Unsopported media type' });
        return;
    }
    else if (err.name && err.name === 'UnauthorizedError') {
        res.status(401).json({ success: false, error: 'Unauthorized' });
        return;
    }

    next();
  }

module.exports = {
    errorMiddleware,
};
