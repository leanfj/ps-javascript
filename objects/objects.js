// Objects declaração

let pessoa = {
  nome: 'Leandro',
  sobreNome: 'Ferreira'
};

// console.log(pessoa.nome);
// console.log(pessoa.sobreNome);

//passando object como agumento de função
function trocaNome(pessoa) {
  pessoa.nome = 'Carlos';
}

trocaNome(pessoa);

// console.log(pessoa.nome);

//Arrays de objects

let pessoas = [
  {
    nome: 'Joana',
    sobreNome: 'Dark'
  },
  {
    nome: 'Fulano',
    sobreNome: 'de Tal'
  }
];

// console.log(pessoas[0].nome);

// objects do Javascript

// Math
for (let index = 0; index < 4; index++) {
  let numero = Math.random() * 10;
  //trunc retorna a parte inteira
  numero = Math.trunc(numero);
  console.log(numero);
}

//date

let data = new Date().toDateString();
console.log(data);

//string

let nome = 'Leandro';

nome = nome.toUpperCase();

console.log(nome);

//Number

let resultado = 0 / 0;

console.log(Number.isNaN(resultado));
