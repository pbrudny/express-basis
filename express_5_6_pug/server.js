var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/store', function(req, res, next) {
    console.log('Jestem pośrednikiem przy /store');
    next();
});

app.get('/first-view', function(req, res) {
    res.render('first-view');
});

app.get('/dynamic-view', function(req,res) {
    res.render('dynamic', {
        user: { name: 'Piotruś' }
    });
});

app.get('/store', function(req, res) {
    res.send('To jest sklep');
});

app.get('/', function(req, res) {
    res.render('content');
});

var server = app.listen(3000, function() {
    console.log('Słuchamy na http://localhost:3000');
});
app.use(function(req, res, next) {
    res.status(404).send('Nie ma takiej strony :(');
});