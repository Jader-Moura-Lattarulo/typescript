let number: number = 245;
let word: string = "palavra"

console.log(number, word);
console.log("----------------------------");

let numbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numbersArray[0]);
console.log("----------------------------");

const person: {
    name: string,
    age: number
} = {
    name: "Jader",
    age: 35
}

console.log(person);
console.log("----------------------------");

function sumNumbers (number01: number, number02: number): number {
    return number01 + number02;
}

console.log(sumNumbers(5, 4)); 

console.log("----------------------------");

interface Car {
    brand: string;
    year: number;
}

class Bmw implements Car {
    brand: string,
    year: number;

    constructor(brand: string, year:number) {
        this.brand = brand;
        this.year = year;
    }
}

const bmw01 = new Bmw("BMW", 2024);

console.log(bmw01);


console.log("----------------------------");

interface Vehicle {
    tipo: string;
}

interface Motocicle extends Vehicle {
    cylinderCapacity: number;
}

class MotocicleClass implements Motocicle {
    tipo: string;
    cylinderCapacity: number;

    constructor(tipo: string, cylinderCapacity: number) {
        this.tipo = tipo;
        this.cylinderCapacity = cylinderCapacity;
    }
}

const motocicle01 = new MotocicleClass("Esportiva", 1000);
console.log(motocicle01);

console.log("----------------------------");

let numberOrString: string | number;
numberOrString = "Jader"
numberOrString = 35
console.log(typeof(numberOrString));


console.log("----------------------------");

function printFirstElement<T>(array: T[]): void {
        console.log(array[1]);        
}

printFirstElement(["Jader", "Gabi", "Marly", "Laura"])

console.log("----------------------------");
