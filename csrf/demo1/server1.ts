import express = require('express');
var cookieSession = require('cookie-session');


var app = express();

app.use(cookieSession({
    name: 'session',
    keys: [' secret keys '],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views1')
app.use('/data', (req, res, next) => {
    res.json({
        port: 3000,
        data: true,
        name: req.session.name
    })
});

app.use('/', (req, res, next) => {
    if (req.session.name) {
        res.render('index', {
            name: req.session.name
        });
    } else {
        req.session.name = 'world';
        res.render('index');
    }
});

app.listen(3000, () => {
    console.log('server is running on 3000');
});
