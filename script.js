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



// randomNumbers.forEach(function ( cadaElemento, index ) {
//   console.log("probando funcion hacerAlgo", cadaElemento, index)
// } )

randomNumbers.forEach( ( cadaElemento, index ) => {
  console.log("probando funcion hacerAlgo", cadaElemento, index)
  if ( cadaElemento % 2 === 0) {
    console.log( `el numero ${cadaElemento} es par` )
  }
  if ( cadaElemento === 42 ) {
    console.log( `la respuesta a la vida, al universo y a todo lo demas` )
  }
} )

// ejemplo con bucle tradicional
for (let i = 0; i < randomNumbers.length; i++) {
  console.log("probando funcion hacerAlgo", randomNumbers[i], i)
  if ( randomNumbers[i] % 2 === 0) {
    console.log( `el numero ${randomNumbers[i]} es par` )
  }
  if ( randomNumbers[i] === 42 ) {
    console.log( `la respuesta a la vida, al universo y a todo lo demas` )
  }
}

// cuando usamos forEach
// - Cuando SIEMPRE queremos iterar sobre todos los elementos, y no va a ocurrir algun break


// cuando usamos bucle tradicional for o for of
// - Cuando en algun momento queremos detener el bucle


// .map()
// 1. hacer una ejecucion por cada elemento
// 2. retorna un nuevo array con cada uno de los elementos retornados dentro del callback

// crear un nuevo array con todos los numeros pero multiplicados por 100

// let newArr = [];

// randomNumbers.forEach( (eachElement) => {
//   newArr.push( eachElement * 100 )
// } ) 

// console.log(newArr)

let newArray = randomNumbers.map( (eachElement) => {
  console.log(eachElement)
  // en el map yo SIEMPRE voy a retornar cada elemento modificado
  return eachElement * 100 // retorno lo que quiero que sea cada elemento del nuevo array
} )

console.log(newArray)
console.log(randomNumbers) // original sin modificaciones


// el forEach SIEMPRE retorna

// map con funciones

// funcion que recibe un array de numeros y devuelve un array de los numeros convertidos a string.

function numbersAsStrings( unArray ) {

  let strings = unArray.map((eachNumber) => {
    return `El numero: ${eachNumber}`
  })

  // console.log(strings)
  return strings
}


console.log( numbersAsStrings(randomNumbers) )
console.log( numbersAsStrings([10, 20, 35]) )


// iteracion 3

// Iteration  3: Return only the names of the restaurants 
// Note: Be careful here. 'info' is an object with a key called 'list' which is the array
 
const info = {
  list: [
    {name: 'Mirazur', owner : 'Gustavo'},
    {name: 'Noma', owner : 'Taka'},
    {name: 'Gaggan', owner : 'Alvaro'},
    {name: 'Geranium', owner : 'Gustavo'},
    {name: 'Arpège', owner : 'Luis'},    
 ]  
}


function onlyNames(arr) {
 //your code here
  // console.log(arr)
  let namesArr = arr.map((eachRestaurant) => {
    return eachRestaurant.name
  })
  // console.log(namesArr)

  return namesArr
}

// test
const restaurants = onlyNames( info.list )
// console.log(restaurants)
// Output should be [ 'Mirazur', 'Noma', 'Gaggan', 'Geranium', 'Arpège']


// ...
// de una forma especifica enviarlo a la visualizaion


const cars = [
  { brand: "Mercedes-Benz", year: 2012, weight: 0.8 },
  { brand: "Porsche", year: 2020, weight: 1.3 },
  { brand: "Bugatti", year: 2003, weight: 0.5 },
  { brand: "Volvo", year: 2010, weight: 1.9 },
  { brand: "Smart", year: 2010, weight: 0.1 },
];

// filtrarlos

// un nuevo array solo con los coches de 2011 en adelante

let newCars = cars.map((eachCar) => {
  if (eachCar.year > 2010) {
    return eachCar
  }
  // else {
  //   return undefined
  // }
})

console.log(newCars)

// map SIEMPRE devuelve un array con la misma cantidad de elementos que el array original


// filter()

let filteredCars = cars.filter((eachCar) => {
  console.log(eachCar) // ejecuta una accion por cada elemento del array
  // el filter SIEMPRE espera que devolvamos true o false
  // true => añade el elemento por el cual estamos iterando
  // false => no añadas el elemento por el cual estamos iterando
  if (eachCar.year > 2010) {
    return true // añadelo al array
  } else {
    return false // no lo añadas al array
  }

  // forma reducida de hacer lo mismo que arriba
  // return eachCar.year > 2010
})

console.log(filteredCars)


// find()
// SELF_GUIDED
// filtra un solo elemento del array
// no retorna un array => retorna el elemento



let numbers = [10, 3, 12, 8, 6];

// quiero buscar la suma de todos los numeros de array

// let acumulador = 0;

// for (let i = 0; i < numbers.length; i++) {
//   acumulador = acumulador + numbers[i]
// }

// console.log(acumulador)

// reduce()

let acumuladorFinal = numbers.reduce((acumulador, eachElement) => {
  console.log(acumulador, eachElement)

  // el reduce espera que nosotros retornemos como va modificandose el acumulador
  return acumulador + eachElement
}, 0)
// como segundo argumento de reduce, agregamos el valor inicial del acumulador

console.log(acumuladorFinal)


let people = [
  { name: "Pedro", candy: 20 },
  { name: "Antonio", candy: 25 },
  { name: "Ruth", candy: 10 },
  { name: "Jorge" }
]

let total = people.reduce( (acc, eachPerson) => {
  
  if (eachPerson.candy !== undefined) {
    return acc + eachPerson.candy
  } else {
    return acc // retornamos el acumulador sin ningun cambio
  }

}, 0 )


console.log(total)


let namesOfPeople = people.reduce((acc, eachPerson) => {

  return acc + eachPerson.name + " "

}, "")

console.log(namesOfPeople)