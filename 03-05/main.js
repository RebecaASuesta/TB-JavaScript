// 1.  Ejercicios destructuring
    // Dado el siguiente objeto:
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

        // Extrae la empleada Ana con todos sus datos personales:
const [empleade1, empleade2, empleade3] = empleados
console.log(empleade2)

        // Extrae el email del empleado Luis --> Luis@gmail.com
const {name, email} = empleade1
console.log(email)

    // Usa la desestructuración para intercambiar los valores de a y b
// Inicialmente
let a = 5;
let b = 3;
// Al final
// let a = 3;
// let b = 5;
    // forma 1
[a, b] = [b, a]
console.log(a, b)

// forma2
// const inicial = [a,b]
// const final = [b,a]
// console.log(final)

// 2. Ejercicios spread/rest
    // Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
const sumEveryOther = (...a) => {
    const suma = a.reduce((a, b) => a + b)
    return suma
}

const prueba1 = sumEveryOther(6, 8, 2, 3, 1); //20
const prueba2 = sumEveryOther(11, 3, 12); //26

console.log(prueba1)
console.log(prueba2)


    // Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
const addOnlyNums = (...a) => {
    const nums = a.filter((a) => (typeof a == 'number'))
    const sum = nums.reduce((a, b) => a + b)
    return sum
}

const prueba3 = addOnlyNums(1, 'perro', 2, 4); //7

console.log(prueba3)

    // Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
const countTheArgs = (...a) => {
    return a.length
}

const prueba4 = countTheArgs('gato', 'perro'); //2
const prueba5 = countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

console.log(prueba4)
console.log(prueba5)

    // Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
        // forma1
// const fusion = (...a) => {
//     return a.reduce((a, b) => a + ' ' + b)
// }

// const array1 = ['A', 'ver', 'si']
// const array2 = ['me', 'muero']

// const prueba6 = fusion(array1,array2)
// console.log(prueba6)

        // forma2
const combineTwoArrays = (a,b) => {
    return fusion = [...a, ...b]
}

const array1 = ['A', 'ver', 'si']
const array2 = ['me', 'muero']
const fusionado = combineTwoArrays(array1,array2)
console.log(fusionado)

// 3. Extras
    // Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

        // Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana
// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;
const {yesterday:maximaAyer, today:maximaHoy, tomorrow:maximaManana} = HIGH_TEMPERATURES

console.log(maximaHoy)
console.log(maximaManana)

    // Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
        // Copiado de David
const onlyUniques = (...parametro) => {
    let unico = [...new Set(parametro)];
    return unico
}

const prueba7 = onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'); //['gato', 'pollo', 'cerdo']
const prueba8 = onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

console.log(prueba7)
console.log(prueba8)

    // Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
        // Copiado de David
// const combineAllArrays = (firstArray = [], ...otherArrays) => {
//     return firstArray.concat(...otherArrays)
// }

        // Copiado de Germán (profe)
// const combineAllArrays = (...combinados) => {
//     return combinados.reduce((a,b) => [...a, ...b])
// }

const prueba9 = combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1]) // [3, 6, 7, 8, 2, 7, 3, 1]
const prueba10 = combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

console.log(prueba9)
console.log(prueba10)
 
    // Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.
        // No sé qué está pasando, da un resultado diferente a 29
// const sumAndSquare = (...a) => {
//     const result = a.reduce((a, b) => (a ** 2) + b)
//     return result
// }

        // Copiado de David
const sumAndSquare = (...numbers) => {
    return numbers.reduce((sum, number) => {
        return sum + Math.pow(number, 2);
    }, 0);
}

const prueba11 = sumAndSquare (2, 3, 4) // 29

console.log(prueba11)