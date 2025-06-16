const express = require('express');
const router = express.Router();
const firebaseServices = require('../services/firebaseServices.js');

router.post('/cadastro', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
  }

  firebaseServices.criaUsuarioEmailSenha(
    email,
    senha,
    (user) => {
      console.log("Usuário cadastrado com sucesso:", user.email);
      res.status(201).json({ message: "Usuário cadastrado com sucesso", email: user.email });
    },
    (code, msg) => {
      console.error("Erro ao cadastrar:", code, msg);
      res.status(400).json({ error: msg });
    }
  );
});

router.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
  }

  firebaseServices.loginEmailSenha(
    email,
    senha,
    (user) => {
      console.log("Login realizado com sucesso:", user.email);
      res.status(200).json({ message: "Login realizado", email: user.email });
    },
    (code, msg) => {
      console.error("Erro no login:", code, msg);
      res.status(401).json({ error: msg });
    }
  );
});


module.exports = router;
