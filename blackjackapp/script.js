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

let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

let gameVariables = {
  gameStarted: false,
  gameOver: false,
  playerWon: false,
  dealerCards: [],
  playerCards: [],
  dealerScore: 0,
  playerScore: 0,
  deck: []
};

hitButton.style.display = 'none';
stayButton.style.display = 'none';

showStatus();

newGameButton.addEventListener('click', () => {
  gameVariables.gameStarted = true;
  gameVariables.gameOver = false;
  gameVariables.playerWon = false;

  gameVariables.deck = criarBaralho();
  shuffleDeck(gameVariables.deck);
  gameVariables.playerCards = [pegaProximaCarta(), pegaProximaCarta()];
  gameVariables.dealerCards = [pegaProximaCarta(), pegaProximaCarta()];

  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  showStatus();
});

hitButton.addEventListener('click', function() {
  gameVariables.playerCards.push(pegaProximaCarta());
  checkForEndOfGame();
  showStatus();
});

stayButton.addEventListener('click', function() {
  gameVariables.gameOver = true;
  checkForEndOfGame();
  showStatus();
});

function checkForEndOfGame() {
  updateScores();

  if (gameVariables.gameOver) {
    while (
      gameVariables.dealerScore < gameVariables.playerScore &&
      gameVariables.playerScore <= 21 &&
      gameVariables.dealerScore <= 21
    ) {
      gameVariables.dealerCards.push(pegaProximaCarta());
      updateScores();
    }
  }
  if (gameVariables.playerScore > 21) {
    gameVariables.playerWon = false;
    gameVariables.gameOver = true;
  } else if (gameVariables.dealerScore > 21) {
    gameVariables.playerWon = true;
    gameVariables.gameOver = true;
  } else if (gameVariables.gameOver) {
    if (gameVariables.playerScore > gameVariables.dealerScore) {
      gameVariables.playerWon = true;
    } else {
      gameVariables.playerWon = false;
    }
  }
}

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

//Embaralhar baralho criado
function shuffleDeck(argDeck) {
  for (let i = 0; i < argDeck.length; i++) {
    let swapIdx = Math.trunc(Math.random() * argDeck.length);
    let tmp = argDeck[swapIdx];
    argDeck[swapIdx] = argDeck[i];
    argDeck[i] = tmp;
  }
}

// let baralhoMontado = criarBaralho();

// function cartaAleatoria() {
//   let random = Math.trunc(Math.random() * 52);
//   let cartaRandom =
//     baralhoMontado[random].valor + ' de ' + baralhoMontado[random].naipe;
//   return cartaRandom;
// }
// console.log(cartaAleatoria());

function getCardNumericValue(argCard) {
  switch (argCard.valor) {
    case 'As':
      return 1;
    case 'Dois':
      return 2;
    case 'Três':
      return 3;
    case 'Quatro':
      return 4;
    case 'Cinco':
      return 5;
    case 'Seis':
      return 6;
    case 'Sete':
      return 7;
    case 'Oito':
      return 8;
    case 'Nove':
      return 9;
    default:
      return 10;
  }
}

function getScore(argCardArray) {
  let score = 0;
  let hasAce = false;
  for (let i = 0; i < argCardArray.length; i++) {
    let card = argCardArray[i];
    score += getCardNumericValue(card);
    if (card.value === 'As') {
      hasAce = true;
    }
  }
  if (hasAce && score + 10 <= 21) {
    return score + 10;
  }
  return score;
}

function updateScores() {
  gameVariables.dealerScore = getScore(gameVariables.dealerCards);
  gameVariables.playerScore = getScore(gameVariables.playerCards);
}
function showStatus() {
  if (!gameVariables.gameStarted) {
    textArea.innerText = 'Bem vindo ao BlackJack';
    return;
  }

  let dealerCardsString = '';
  for (let i = 0; i < gameVariables.dealerCards.length; i++) {
    dealerCardsString += pegaCartaString(gameVariables.dealerCards[i]) + '\n';
  }

  let playerCardsString = '';
  for (let i = 0; i < gameVariables.playerCards.length; i++) {
    playerCardsString += pegaCartaString(gameVariables.playerCards[i]) + '\n';
  }
  updateScores();

  textArea.innerText = `
    Mesa Tem:

    ${dealerCardsString}
    (Pontos: ${gameVariables.dealerScore})



    Jogador tem:

    ${playerCardsString}
    (Pontos: ${gameVariables.playerScore})

  `;

  if (gameVariables.gameOver) {
    if (gameVariables.playerWon) {
      textArea.innerText += 'Jogador Ganhou';
    } else {
      textArea.innerText += 'Mesa Ganhou';
    }
    newGameButton.style.display = 'inline';
    hitButton.style.display = 'none';
    stayButton.style.display = 'none';
  }

  // for (let i = 0; i < gameVariables.deck.length; i++) {
  //   textArea.innerText += '\n' + pegaCartaString(gameVariables.deck[i]);
  // }
}

function pegaProximaCarta() {
  //shift remove o primeiro elemento do array
  return gameVariables.deck.shift();
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

// console.log('Bem vindo ao BlackJack(21)!');
// console.log('Sua jogada: ');
// console.log(' ' + pegaCartaString(maoJogador[0]));
// console.log(' ' + pegaCartaString(maoJogador[1]));
