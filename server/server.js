const express = require('express');
const router = require('./route');
const sequelize = require('./models').sequelize;
const https = require('https');
const http = require('http');
const fs = require('fs');


const app = express();

sequelize.sync();

app.use(express.json());
app.use('/', router);

if (process.env.NODE_ENV === 'production') {
    const options = {
        key: fs.readFileSync('/etc/letsencrypt/live/studylog.shop/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/studylog.shop/cert.pem')
    }
    https.createServer(options, app).listen(5001);
} else {
    http.createServer(app).listen(5001);
}