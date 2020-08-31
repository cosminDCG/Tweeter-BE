const express = require('express');
var cors = require('cors');
const bodyParser = require("body-parser");
const app = express();

const Config = require('./env/Config');

app.use(cors());
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));

app.use(require('./controllers/AuthenticationController'));
app.use(require('./controllers/FeedController'));

var server = app.listen(Config.port, () => {
    console.log('Tweeter is listening on port: ' + Config.port + '!');
});