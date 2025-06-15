var express = require('express');
var router = express.Router();

const arrCampeonatos = new Array();

arrCampeonatos.push(
  {
    id: 1,
    nome: 'Brasileirão',
    temporada: '2025-2025',
    tipo: 'Nacional',
    regiao: 'Brasil'
  }
);
arrCampeonatos.push(
  {
    id: 2,
    nome: 'Libertadores da América',
    temporada: '2025-2025',
    tipo: 'Continental',
    regiao: 'América do Sul'
  }
);
let leticia = {};
leticia['id'] = 3;
leticia['nome'] = 'Copa Sudamericana';
leticia['regiao'] = 'América do Sul';
leticia['temporada'] = '2025-2025';
leticia['tipo'] = 'Continental';

arrCampeonatos.push(leticia);
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(arrCampeonatos)
});

module.exports = router;
