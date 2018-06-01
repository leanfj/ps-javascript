let estado = 'PR';

switch (estado) {
  case 'PR':
    console.log('Paraná');
    break;
  case 'RJ':
    //Podemos ter mais de um executando
    console.log('Rio de Janeiro');
    console.log('Niterói');
    break;
  default:
    console.log('Não definido');
    break;
}
