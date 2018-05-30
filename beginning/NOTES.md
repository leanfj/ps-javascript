# Variáveis

Utilização de nomenclatura com camelcase

```javascript
let minhaVariavel = 'Leandro',
  outraVariavel = 'Ferreira';
```

# Code Errors

ReferenceError - associado a elementos não definidos/declarados.
SyntaxError - associado a utilização de palavras reservadas indevidamente, elemento de sintax da liguagem utilizados de foram errada

# String / Numbers variáveis

#### Strings

```javascript
let var1 = 'Uma variavel';
let var2 = 'Outra variável';
let var3 = "Jonh's Burger";
let var4 = 'Variavel';
let var5 = "Jonh's Burger";
```

#### Numbers

```javascript
let var1 = 42;
let var2 = 0.42;
let var3 = 52000000;
let var4 = 0.000052;
```

#### Concatenação

```javascript
let primeiroNome = 'Leandro';
let segundoNome = 'Ferreira';

console.log(primeroNome + segundoNome); // LeandroFerreira
console.log(primeroNome + ' ' + segundoNome); // Leandro Ferreira
```

# Operadores simples

`+` - Adição
`-` - Subtração
`*` - Multiplicação
`/` - Divisão
`%` - Resto
`()` - Parênteses

# Comentario

```javascript
// Comentario de linha
/* Comentario
  De multiplas linhas
  Como você pode ver */
```

# Strings type

`String`

# Numbers types

`Number`
`Inifinity`
`NaN`

# Boolean Types

`true`
`false`

# undefined e null

`undefined` - como variáveis são inicializadas e não podemos definir na variável

`null` - podemos definir em variáveis tem um comportamento de uma variável em "branco"

# arrays

```javascript
let meuArrays = [1, 2, 3];
console.log(meuArray[0]); // 1
console.log(meuArray[1]); // 2
console.log(meuArray[2]); // 3
console.log(meuArray[3]); // undefined
```

`.push()` adciona ao final do array

```javascript
meuArray.push(4);

console.log(meuArray); // 1, 2, 3, 4
```

`.pop()` remove ultimo elemento do array e retorna o valor removido

```javascript
let removido = meuArray.pop();
cosole.log(meuArray); // 1, 2, 3
console.log(removido); // 4
```

`.shift()` remove o primeiro valor do array

```javascript
let remove = meuArray.shift();
console.log(meuArray); // 2, 3
console.log(remove); // 1
```

`.splice(start, end)` remove na posição e quantidade especificas

```javascript
let meuArray = [1, 2, 3, 4, 5, 6];
meuArray.splice(2, 1); // 3
console.log(meuArray);
```
