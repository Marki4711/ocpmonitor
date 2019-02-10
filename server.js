var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
 
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/nav0', function (req, res) {
  res.render('nav0',{ active_nav0: "true" });
});

app.get('/nav1', function (req, res) {
  res.render('nav1',{ active_nav1: "true" });
});

app.get('/nav2', function (req, res) {
  res.render('nav2',{ active_nav2: "true" });
});

app.get('/nav3', function (req, res) {
  res.render('nav3',{ active_nav3: "true" });
});

app.listen(8080);
console.log('Server running ...');
