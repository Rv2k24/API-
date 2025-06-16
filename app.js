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
var authRouter = require('./routes/auth'); 

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.API_KEY) {
    return res.status(403).json({ mensagem: 'Acesso negado: API Key inválida' });
  }
  next();
};


app.use('/auth', authRouter);

// Rotas protegidas
app.use('/campeonatos', apiKeyMiddleware, campeonatosRouter);
app.use('/times', apiKeyMiddleware, timesRouter);
app.use('/jogadores', apiKeyMiddleware, jogadoresRouter);
app.use('/partidas', apiKeyMiddleware, partidasRouter);
app.use('/users', apiKeyMiddleware, usersRouter);

app.use('/', indexRouter);

module.exports = app;
