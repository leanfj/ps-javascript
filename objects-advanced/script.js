//Object letral
let meuObjeto = {
  primeiroNome: 'Leandro',
  segundoNome: 'Ferreira'
}

display(meuObjeto)

//Constructor function

function Pessoa (argNome, argSobrenome) {
  this.nome = argNome;
  this.sobre = argSobrenome
}

//Exemplo onde this se referencia ao global object
let leandro = Pessoa('Leandro', 'Ferreira');

display(window.nome);


//Colocando o this para ser referenciado dentro do object criado com new keyword
let dayana = new Pessoa('Dayana', 'Brandao');

display(dayana);

display(dayana.nome);

//Criando class ES6

class Cachorro {
  constructor (argNome, argRaca){
    this.nome = argNome,
    this.raca = argRaca
  }

  //Metodos
  latir(){
    console.log('Auau');
  }
}

let cachorro1 = new Cachorro('Bolota', 'SRD');

console.log(Cachorro);
display(cachorro1);
cachorro1.latir();

let minhaFruta = {
  nome: 'maça',
  peso: 100,
  cor: 'vermelha'
}

for(let item in minhaFruta){
  console.log(minhaFruta[item]);
}


console.log(Object.keys(minhaFruta));


