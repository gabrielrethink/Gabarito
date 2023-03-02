# Atividades

## Atividade 01

### Retorne a soma total dos números contidos na array passada como parâmetro.

```js
function total(arr) {
  // ...
}
console.log(total([1, 2, 3])); // 6
```

## Atividade 02

### Transforme uma array de dados em uma string com a concatenação de todos estes números.

```js
function stringConcat(arr) {
  // ...
}
console.log(stringConcat([1, 2, 3])); // "123"
```

## Atividade 03

### Dada uma array com dados sobre eleitores, crie uma função que devolva a quantidade de pessoas abaixo de 30 anos que votaram.

```js
const totalVeryYoungVotes = // seu código aqui
let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVeryYoungVotes); // 1

```

## Atividade 04

### Crie uma função que retorne, a partir da array wishlist, o quanto custaria se você comprasse todos os itens listados na array.

```js
const shoppingSpree = // seu código aqui
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
console.log(shoppingSpree); // 227005
```

## Atividade 05

### A partir da array fornecida (voters), crie uma função que retorne o número total de eleitores jovens (numYoungPeople - até 29 anos) e o número de eleitores jovens que votaram (numYoungVotes).

### O mesmo para eleitores de meia idade (de 30 a 40 anos) e mais velhos. Veja como deve ficar a saída esperada.

```js
const votersResult = // seu código aqui
const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
console.log(voterResults); // Returned value shown below:
/*
{ numYoungVotes: 1, // número de eleitores jovens que votaram
numYoungPeople: 4, // número de eleitores jovens
numMidVotesPeople: 3, // número de eleitores maduros que votaram
numMidsPeople: 4, // número de eleitores maduros
numOldVotesPeople: 3, // número de eleitores sêniores que votaram
numOldsPeople: 4 // número de eleitores sêniores
}
*/
```
