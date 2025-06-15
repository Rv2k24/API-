var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.json({
    message: 'API de Campeonatos de Futebol',
    endpoints: [
      '/campeonatos',
      '/times',
      '/jogadores',
      '/partidas'
    ]
  });
});

module.exports = router;

