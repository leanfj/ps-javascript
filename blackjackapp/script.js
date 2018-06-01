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
      baralho.push(valores[valoresIdx] + ' de ' + naipes[naipesIdx]);
    }
  }

  return baralho;
}

let baralhoMontado = criarBaralho();

function pegaProximaCarta() {
  //shift remove o primeiro elemento do array
  return baralhoMontado.shift();
}

//Loop para mostra o baralho
for (let i = 0; i < baralhoMontado.length; i++) {
  const element = baralhoMontado[i];
  console.log(element);
}

let maoJogador = [pegaProximaCarta(), pegaProximaCarta()];

console.log('Bem vindo ao BlackJack(21)!');
console.log('Sua jogada: ');
console.log(' ' + maoJogador[0]);
console.log(' ' + maoJogador[1]);
