import createError = require("http-errors");
import express = require("express");
import path = require("path");
import cookieParser = require("cookie-parser");
import logger = require("morgan");
import history = require("connect-history-api-fallback");

import apiRouter = require('./routes/api');

var app = express();
app.use(history());

app.use(express.static(
    path.join(__dirname, 'dist')
));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter.router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

export { app };