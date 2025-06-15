var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var campeonatosRouter = require('./routes/campeonatos');
var timesRouter = require('./routes/times');
var partidasRouter = require('./routes/partidas');
var jogadoresRouter = require('./routes/jogadores');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas principais
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/campeonatos', campeonatosRouter);
app.use('/times', timesRouter);
app.use('/jogadores', jogadoresRouter);
app.use('/partidas', partidasRouter);

module.exports = app;
