var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/auth/google', function(req, res) {
    res.render('google_form');
});

app.post('/sign_in', function(req, res) {
    res.render('welcome');
});

var server = app.listen(3000, function() {
    console.log('Słuchamy na http://localhost:3000');
});

app.use(function(req, res, next) {
    res.status(404).send('Nie ma takiej strony :(');
});