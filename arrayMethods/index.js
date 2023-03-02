const cloneArray = (array) => array.map((element) => element);

// console.log(createCloneArray([1, 2, 4, 0]));
// // [1, 2, 4, 0]
// console.log(createCloneArray([1, 2, [7, 10]]));
// [1, 2, [7, 10]]

const slicedArray = (array, sliceAt = 1) =>
  array.slice(0, sliceAt > 0 ? sliceAt : 0);
// console.log(slicedArray([7, 9, 0, -2], 3));
// // [7, 9, 0]
// console.log(slicedArray([7, 9, 0, -2]));
// // [7]
// console.log(slicedArray([], 3));
// // []
// console.log(slicedArray([7, 9, 0, -2], 6));
// // [7, 9, 0, -2]
// console.log(slicedArray([7, 9, 0, -2], -3));
// // []

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const arrayToStrings = (numbersArray) =>
  numbersArray.reduce((acc, cur, index) => {
    if (index % 3 === 0 && index !== 0) {
      return acc + "." + cur;
    }
    return acc + cur;
  }, "");

// console.log(arrayToStrings(numbers));
// “123.456.78”

const bringOnlySmallWords = (array) => array.filter((word) => word.length <= 5);
console.log(
  bringOnlySmallWords([
    "cachorro",
    "pato",
    "oi",
    "família",
    "comer",
    "camping",
    "aquarela",
  ])
);
// ["pato", "oi", "comer"]

const personsInformation = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

const ageDifference = () => {
  const formatedData = personsInformation.map((person) => person.age);
  return [
    Math.min(...formatedData),
    Math.max(...formatedData),
    Math.max(...formatedData) - Math.min(...formatedData),
  ];
};
console.log(ageDifference());
// [13, 67, 54];
