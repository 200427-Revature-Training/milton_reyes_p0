import express from 'express';
const path = require('path');

export const indexRouter = express.Router();

indexRouter.get('', (request, response, next) => {
    // response.send('Hello');
    response.sendFile('index.html', {
        root: path.join(__dirname, '../../web')
    })
});

