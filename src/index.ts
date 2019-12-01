import * as fs from "fs";

const calcFuel = (val: number) => {
    const fuel = Math.floor(val/3)-2;
    return fuel;
}

const calcFuelUntilZero = (val: number) => {
    let interim = val;
    let fuel = 0;
    do {
        interim = calcFuel(interim);
        console.log(interim);
        interim > 0 ? fuel += interim : fuel;
    } while (interim > 0);
    console.log(fuel);
    return fuel;
}

let input = fs.readFileSync("./src/data/input.txt").toString('utf-8').split('\n');

const result = input.map( val => calcFuelUntilZero(parseInt(val)) ).reduce((val1, val2) => val1 + val2);
console.log("*********")
console.log(result);
console.log("*********")

