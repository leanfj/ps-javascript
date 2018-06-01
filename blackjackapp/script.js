/*

Black Jack App

*/

let naipes = ['Copas', 'Paus', 'Ouros', 'Espada'];
let valores = [
  'As',
  'Rei',
  'Rainha',
  'Valete',
  'Dez',
  'Nove',
  'Oito',
  'Sete',
  'Seis',
  'Cinco',
  'Quatro',
  'Três',
  'Dois'
];

function criarBaralho() {
  let baralho = [];
  //Loops dos naipes
  for (let naipesIdx = 0; naipesIdx < naipes.length; naipesIdx++) {
    //loop para valores
    for (let valoresIdx = 0; valoresIdx < valores.length; valoresIdx++) {
      let carta = {
        naipe: naipes[naipesIdx],
        valor: valores[valoresIdx]
      };
      baralho.push(carta);
    }
  }

  return baralho;
}

let baralhoMontado = criarBaralho();

function cartaAleatoria() {
  let random = Math.trunc(Math.random() * 52);
  let cartaRandom =
    baralhoMontado[random].valor + ' de ' + baralhoMontado[random].naipe;
  return cartaRandom;
}

console.log(cartaAleatoria());

function pegaProximaCarta() {
  //shift remove o primeiro elemento do array
  return baralhoMontado.shift();
}

function pegaCartaString(argCarta) {
  return argCarta.valor + ' de ' + argCarta.naipe;
}

//Loop para mostra o baralho
// for (let i = 0; i < baralhoMontado.length; i++) {
//   const element = baralhoMontado[i];
//   console.log(element);
// }

let maoJogador = [pegaProximaCarta(), pegaProximaCarta()];

console.log('Bem vindo ao BlackJack(21)!');
console.log('Sua jogada: ');
console.log(' ' + pegaCartaString(maoJogador[0]));
console.log(' ' + pegaCartaString(maoJogador[1]));
