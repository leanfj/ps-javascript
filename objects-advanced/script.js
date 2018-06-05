let meuObjeto = {
  primeiroNome: 'Leandro',
  segundoNome: 'Ferreira'
}

display(meuObjeto)

function Pessoa (argNome, argSobrenome) {
  this.state = {
    nome: argNome,
    sobreNome: argSobrenome,
    nomeCompleto: ''
  }
  console.log(this.state);
}

let leandro = new Pessoa('Leandro', 'Ferreira');

console.log(leandro);