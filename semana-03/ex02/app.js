'use strict';

console.log('e02-s03-m1');

const entradaNome = document.getElementById('nome');
const botaoAcao = document.getElementById('acao');
const pMensagem = document.getElementById('mensagem');


const mensagemOla = nome => `Olá, ${nome}!`;

const resultado = mensagemOla('Stella');
console.log(resultado);

botaoAcao.addEventListener('click', () => {
  pMensagem.innerHTML = mensagemOla(entradaNome.value);
});