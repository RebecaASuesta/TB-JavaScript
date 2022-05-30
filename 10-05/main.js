// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
class persona{
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles() {
    }
}

let persona1 = new persona("miguel", 23,"masc");
console.log(persona1);

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.
class estudiante extends persona {
    constructor (nombre, edad, genero, curso, grupo){
        super(nombre, edad, genero)
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar() {
    }
}

let estudiante1 = new estudiante("miguel", 23,"masc", 5, "B");
console.log(estudiante1);

// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.
class profesor extends persona {
    constructor (nombre, edad, genero, asignatura, nivel){
        super(nombre, edad, genero)
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar(){
    }
}

let profesor1 = new profesor("miguel", 23,"masc", "cono", 2);
console.log(profesor1);