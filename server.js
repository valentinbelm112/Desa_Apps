const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');

mongoose.Promise = global.Promise;
const uri =
  "mongodb+srv://db_user_platzivideos:V71858727NEM@cluster0.rdb3q.mongodb.net/Integracn_Movies?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

var corsOptions = {
  origin: "http://localhost:8080",
};

app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'view')));
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
const routes = require('./routes/routing.js');
const routesEmail = require('./routes/routingEmail.js');

routes(app);
routesEmail(app);

app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'});
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
