
const fs = require('fs');

const setJSONBody = (requestParams, context, ee, next) => {
    const formData = {
        file: fs.createReadStream(__dirname + '/example.jpg'),
    };

    requestParams.formData = Object.assign({}, requestParams.formData, formData);

    return next();
};

const logResponse = (requestParams, response, context, ee, next) => {
    console.log('[DEBUG] Response: ', response.body);
    return next();
};

module.exports = {
    setJSONBody,
    logResponse,
};
