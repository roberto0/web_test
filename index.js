
// requere
const dataBase = require("./dataBase");
const express = require("express");
const path = require("path");
const fs = require("fs");

// intialization
const app = express();

// setting
app.set('port', process.env.PORT || 8080);

app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(require("./routes/index"));
app.use(require("./routes/ingresar"));

// Middwares

// Global varaibles

// Routes

// Static files
app.set('public', path.join(__dirname, 'public'));

// Server
app.listen(app.get('port'), () => {
    console.log('Server on port: ',app.get('port'));
});



