import { Hero, Villiain } from "../interfaces";
import { genericFunction, genericFunctionArrow, printObject } from "../generics/generics";

// console.log(genericFunction(3.141618).toFixed(2))
// console.log(genericFunctionArrow('Hola Mundo').toUpperCase())
// console.log(genericFunctionArrow(new Date()).getDay())

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLvl: 130
}

console.log(genericFunctionArrow<Villiain>(deadpool).dangerLvl)