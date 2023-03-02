## Orientações

- Sua tarefa será converter as funções abaixo para a sintaxe usando arrow functions. Procure usar a sintaxe mais enxuta possível em cada caso.
- Suba as soluções para seu github, dentro de uma pasta chamada arrow_functions.
- Use o material de apoio listado abaixo para consulta.
  **Dica: teste as funções antes e depois para verificar se têm o mesmo comportamento!**

### Materiais e recursos

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

## Atividades

- [x] Função 01

```js
function doubleANumber(number) {
  return number * 2;
}
```

- [x] Função 02

```js
function createFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
```

- [x] Função 03

```js
function calculateTheLenghtOfAString(str) {
  console.log(`o tamanho de "${str}" é:`, str.length);
}

let longestCityNameInTheWorld =
  "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";

calculateTheLenghtOfAString(longestCityNameInTheWorld);
```

- [x] Função 04

```js
function calculateTheLenghtOfAString2(str) {
  let length = str.length;
  console.log(`o tamanho de "${str}" é:`, length);
  return str.length;
}

calculateTheLenghtOfAString("willynilly");
```

- [x] Função 05

```js
let alerts = [
  "Você é bem legal",
  "Você é inteligente",
  "Que bom trabalhar contigo",
];

function showRandomAlert(name) {
  alert(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);
}

showAlert("Maria");
```

- [x] Função 06

```js
function getEvenNumbers(array) {
  let evenNumbers = [];
  for (let i of array) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}
```

- [x] Função 07

```js
const userObject = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  location: {
    latitude: 43, longitude: 12
  }
}

function displayUser(user) {
  return user.name + ' ' + user.surname + ' (' + user.age + ')'
}

const output = displayUser(userObject)
}
```
