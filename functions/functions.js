function umaFuncao() {
  console.log('Me chamou');
}

umaFuncao();

let umaOutraFuncao = () => {
  console.log('Me chamou agora');
};

umaOutraFuncao();

//argumentos em funções

function comArgumento(argTexto) {
  console.log(argTexto);
}

comArgumento('Meu texto aqui');

function nomeCompleto(argNome, argSobrenome) {
  console.log(argNome + ' ' + argSobrenome);
}

nomeCompleto('Leandro', 'Ferreira');

function soma(argPrimeiroNumero, argSegundoNumero) {
  let resultado = argPrimeiroNumero + argSegundoNumero;
  return resultado;
}

function Calculadora(argPrimeiroNumero, operador, argSegundoNumero) {
  let resultado = 0;
  switch (operador) {
    case '+':
      resultado = argPrimeiroNumero + argSegundoNumero;
      break;
    case '-':
      resultado = argPrimeiroNumero - argSegundoNumero;
      break;
    case '*':
      resultado = argPrimeiroNumero * argSegundoNumero;
      break;
    case '/':
      resultado = argPrimeiroNumero / argSegundoNumero;
      break;

    default:
      resultado = 'Operador Inválido';
      break;
  }
  return resultado;
}

console.log(Calculadora(10, '+', 4));
console.log(Calculadora(10, '-', 4));
console.log(Calculadora(10, '*', 4));
console.log(Calculadora(10, '/', 4));
console.log(Calculadora(10, '%', 4));

//Scope

let mensagem = 'Fora do escopo';
function minhaMensagem() {
  let mensagem = 'Dentro da função';
  console.log(mensagem);
}

minhaMensagem();
console.log(mensagem);
