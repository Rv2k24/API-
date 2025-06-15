var express = require('express');
var router = express.Router();

const arrTimes = [
  {
    id: 1,
    nome: 'Internacional',
    cidade: 'Porto Alegre',
    estadio: 'Beira-Rio'
  },
  {
    id: 2,
    nome: 'Corinthians',
    cidade: 'São Paulo',
    estadio: 'Neo-Quimica'
  }
];

router.get('/', function(req, res) {
  res.json(arrTimes);
});

module.exports = router;
