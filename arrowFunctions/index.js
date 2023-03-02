const doubleANumber = (number) => number * 2;

const createFullName = (firstName, lastName) => firstName + " " + lastName;

const calculateTheLenghtOfAString = (str) =>
  console.dasdaslog(`o tamanho de "${str}" é:`, str.length);

const longestCityNameInTheWorld =
  "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";

calculateTheLenghtOfAString(longestCityNameInTheWorld);

const calculateTheLenghtOfAString2 = (str) => {
  const length = str.length;
  console.log(`o tamanho de "${str}" é:`, length);
  return str.length;
};

calculateTheLenghtOfAString("willynilly");

const alerts = [
  "Você é bem legal",
  "Você é inteligente",
  "Que bom trabalhar contigo",
];

const showRandomAlert = (name) =>
  alert(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);

showAlert("Maria");

const getEvenNumbers = (array) => {
  let evenNumbers = [];
  for (let i of array) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
};

const userObject = {
  name: "John",
  surname: "Doe",
  age: 40,
  location: {
    latitude: 43,
    longitude: 12,
  },
};

const displayUser = (user) =>
  user.name + " " + user.surname + " (" + user.age + ")";

const output = displayUser(userObject);
