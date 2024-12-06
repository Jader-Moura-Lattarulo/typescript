"use strict";
let number = 245;
let word = "palavra";
console.log(number, word);
console.log("----------------------------");
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbersArray[0]);
console.log("----------------------------");
const person = {
    name: "Jader",
    age: 35
};
console.log(person);
console.log("----------------------------");
function sumNumbers(number01, number02) {
    return number01 + number02;
}
console.log(sumNumbers(5, 4));
console.log("----------------------------");
class Bmw {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
}
const bmw01 = new Bmw("BMW", 2024);
console.log(bmw01);
console.log("----------------------------");
class MotocicleClass {
    constructor(tipo, cylinderCapacity) {
        this.tipo = tipo;
        this.cylinderCapacity = cylinderCapacity;
    }
}
const motocicle01 = new MotocicleClass("Esportiva", 1000);
console.log(motocicle01);
console.log("----------------------------");
let numberOrString;
numberOrString = "Jader";
numberOrString = 35;
console.log(typeof (numberOrString));
console.log("----------------------------");
function printFirstElement(array) {
    console.log(array[1]);
}
printFirstElement(["Jader", 24, "Marly", "Laura"]);
console.log("----------------------------");
