const total = (array) =>
  array.reduce((acc, cur) => {
    return acc + cur;
  });
console.log(total([1, 2, 3])); // 6

const stringConcat = (array) =>
  array.reduce((acc, cur) => {
    return acc + cur;
  }, "");
console.log(stringConcat([1, 2, 3])); // "123"

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

const totalVeryYoungVotes = () =>
  voters.reduce((acc, cur) => {
    if (cur.age < 30 && cur.voted) return acc + 1;
    return acc;
  }, 0);
console.log(totalVeryYoungVotes()); // 1

const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

const shoppingSpree = () => wishlist.reduce((acc, cur) => acc + cur.price, 0);
console.log(shoppingSpree()); // 227005

const voterResult = (arr) =>
  arr.reduce(
    (acc, curr) => {
      if (curr.age < 30) {
        acc.numYoungPeople += 1;
        if (curr.voted) {
          acc.numYoungVotes += 1;
        }
      }
      if (curr.age >= 30 && curr.age < 40) {
        acc.numMidsPeople += 1;
        if (curr.voted) {
          acc.numMidVotesPeople += 1;
        }
      }
      if (curr.age >= 40) {
        acc.numOldsPeople += 1;
        if (curr.voted) {
          acc.numOldVotesPeople += 1;
        }
      }
      return acc;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  );

console.log(voterResult(voters));
