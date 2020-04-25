const express = require('express');
const router = require('./route');
const sequelize = require('./models').sequelize;
const bodyParser = require('body-parser');

const app = express();

sequelize.sync();

app.use(express.json());
app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());
app.use('/', router);


app.listen(5000, () => {
    console.log('Server On 5000 Port')
});