var express = require('express');
var app = express();

app.use('/store', function(req, res, next) {
    console.log('Jestem pośrednikiem przy /store');
    next();
});

app.get('/store', function(req, res) {
    res.send('To jest sklep');
});

app.get('/', function(req, res) {
    res.send('Hello World');
});

var server = app.listen(3000, function() {
    console.log('Słuchamy na http://localhost:3000');
});
app.use(function(req, res, next) {
   res.status(404).send('Nie ma takiej strony :(');
});