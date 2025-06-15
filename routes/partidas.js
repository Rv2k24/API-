var express = require('express');
var router = express.Router();

const arrPartidas = [
  {
    id: 1,
    campeonatoId: 1,
    timeCasa: 'Internacional',
    timeFora: 'Flamengo',
    data: '2025-05-01',
    local: 'Maracanã',
    resultado: '2x1'
  },
  {
    id: 2,
    campeonatoId: 2,
    timeCasa: 'River Plate',
    timeFora: 'Flamengo',
    data: '2025-06-10',
    local: 'Monumental de Núñez',
    resultado: '1x1'
  }
];

router.get('/', function(req, res) {
  res.json(arrPartidas);
});

module.exports = router;
