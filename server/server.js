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

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/studylog.shop/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/studylog.shop/cert.pem')
};


https.createServer(options, app).listen(5001);
