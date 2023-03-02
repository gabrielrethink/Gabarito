// Traduza esses códigos de JavaScript para TypeScript

// var dobro = function(valor) { return valor * 2
// } console.log(dobro(10))
const dobro: (valor: number) => number = (valor) => valor * 2;
console.log(dobro(0));

// Verifique se há espaço para melhoris nesse código
// var dizerOla = function (nome) {
// if (nome === undefined) { nome = "Pessoa" } console.log("Ola, " + nome)
// }
// dizerOla() dizerOla("Anna")

const dizerOla: (nome?: string) => void = (nome = "Pessoa") => {
  console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");

// Dado esse array, imprima o menor valor!

const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));

// Coloque nums em array

// var nums = [-3, 33, 38, 5]
// var array = [55, 20]
// console.log(array)

const array: Array<number | number[]> = [55, 20];

console.log(array.flat(array.push(nums)));

// Simplifique os trechos de código abaixo utilizando o operador Destructuring!
// var notas = [8.5, 6.3, 9.4]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2] console.log(nota1, nota2, nota3)
// var cientista = {primeiroNome: "Will", experiencia: 12} var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia console.log(primeiroNome, experiencia)

const notas = [8.5, 6.3, 9.4];
console.log(...notas);

const { primeiroNome, experiencia } = { primeiroNome: "Will", experiencia: 12 };
console.log(primeiroNome, experiencia);
