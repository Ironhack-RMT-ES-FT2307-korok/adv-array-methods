console.log("probando")


let myName = "Jorge";


function decirHola( name ) {
  console.log( `Hola ${name}` )
}

decirHola( myName )



function myFunction( mensaje ) {
  console.log("ejecutando funcion myFunction!")
}

myFunction()


function funcionQueAceptaOtraFuncion( patata ) {
  // let patata = myFunction; // misma referencia
  patata("mensaje especifico")
}

funcionQueAceptaOtraFuncion( myFunction )


// callbacks se estudia por dos razones.

// 1. existen metodos en JS que aceptan funciones como argumento
// 2. existen estructuras de codigo avanzadas que usan callbacks para interconectar funcionalidades


let personObj = {
  title: "Sir",
  name: "Ian",
  lastName: "McKellen"
}

let personObj2 = {
  title: "Sir",
  name: "Patrick",
  lastName: "Steward"
}

function fullName( obj ) {
  return `${obj.name} ${obj.lastName}`
}
console.log( fullName(personObj) )


function titleName( obj ) {
  return `${obj.title} ${obj.name}`
}
console.log( titleName(personObj) )


function saludar( obj, comoSaludarlo ) {

  let person = comoSaludarlo( obj )
  return `Hola ${person}, como se encuentra hoy?`
}

console.log( saludar( personObj, titleName ) )
console.log( saludar( personObj2, fullName ) )


// function sum( num1, num2 ) {

// }

// let numero1 = 2;
// let numero2 = 10;

// sum(numero1, numero2)


let someString = "hola"
console.log(someString.repeat(10))



// FOR EACH => arrays
// acepta una funcion a ejecutar por cada elemento del array

// let randomNumbers = [ 4, 8, 15, 16, 23, 42 ];
// let newArr = [];
// function hacerAlgo( cadaElemento, index ) {
//   console.log("probando funcion hacerAlgo", cadaElemento, index)

//   // console.log(cadaElemento * 10)
//   // if (cadaElemento % 2 === 0) {
//   //   newArr.push(cadaElemento)
//   // }

// }

// randomNumbers.forEach( hacerAlgo )
// cuando forEach invoke la funcion de callback le pasa diferentes argumentos
// ... hacerAlgo( 8 )

// ejemplo de lo que ocurre internamente en JS con forEach
// function forEach( callback ) {
//   for (let i = 0; i < randomNumbers.length; i++) {
//     callback( randomNumbers[i], i )
//   }
// }


let randomNumbers = [ 4, 8, 15, 16, 23, 42 ];

function hacerAlgo( cadaElemento, index ) {
  console.log("probando funcion hacerAlgo", cadaElemento, index)
}

randomNumbers.forEach( hacerAlgo )