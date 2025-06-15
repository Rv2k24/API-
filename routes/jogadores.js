const express = require('express');
const router = express.Router();

const arrJogadores = [
  {
    id: 1,
    nome: 'Alan Patrick',
    timeId: 1,
    posicao: 'Meia',
    idade: 34
  },
  {
    id: 2,
    nome: 'Arrascaeta',
    timeId: 2,
    posicao: 'Meia',
    idade: 31
  }
];

const posicoes = {
  Atacante: "Responsável por marcar gols.",
  Zagueiro: "Responsável por defender.",
  Goleiro: "Defende o gol.",
  Lateral: "Joga nas laterais do campo.",
  MeioCampista: "Organiza o jogo no meio-campo."
};

router.get('/', function(req, res) {
  const jogadoresDetalhados = arrJogadores.map(j => ({
    ...j,
    descricaoPosicao: posicoes[j.posicao] || "Descrição não disponível"
  }));
  res.json(jogadoresDetalhados);
});

module.exports = router;
