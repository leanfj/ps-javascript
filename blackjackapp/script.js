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
let baralho = [];

//Loops dos naipes
for (let naipesIdx = 0; naipesIdx < naipes.length; naipesIdx++) {
  //loop para valores
  for (let valoresIdx = 0; valoresIdx < valores.length; valoresIdx++) {
    baralho.push(valores[valoresIdx] + ' de ' + naipes[naipesIdx]);
  }
}

//Loop para mostra o baralho
for (let i = 0; i < baralho.length; i++) {
  const element = baralho[i];
  console.log(element);
}

let maoJogador = [baralho[0], baralho[2]];

console.log('Bem vindo ao BlackJack(21)!');
console.log('Sua jogada: ');
console.log(' ' + maoJogador[0]);
console.log(' ' + maoJogador[1]);
