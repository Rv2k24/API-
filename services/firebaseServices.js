const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');
const { firebaseConfig } = require('../firebaseCredenciais');

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function criaUsuarioEmailSenha(email, senha, sucesso, erro) {
  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      sucesso(userCredential.user);
    })
    .catch((err) => {
      erro(err.code, err.message);
    });
}

function loginEmailSenha(email, senha, sucesso, erro) {
  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      sucesso(userCredential.user);
    })
    .catch((err) => {
      erro(err.code, err.message);
    });
}


module.exports = {
  criaUsuarioEmailSenha,
  loginEmailSenha
};
