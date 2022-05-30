// 1.Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
const click = document.querySelector('HTML')

click.addEventListener('click', noClick);
function noClick (e){
    e.preventDefault();
}

// 2.Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
    // 2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
const clickImg = document.querySelectorAll('img')

for (let imagen of clickImg){
    imagen.addEventListener('click', changeImg);
    function changeImg (){
        imagen.setAttribute('src','assets/magic-1.gif')
    }
}

    // 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
const colorP = document.querySelectorAll('p')

for (let parrafo of colorP){
    parrafo.addEventListener('click', changeColorP)
    function changeColorP (){
        parrafo.style.color = '#663399' // morado
        parrafo.style.background = '#B0E0E6' // azul
    }
}

    // 2.3 Bloques de article o section: Cambia el color de fondo.
const colorBloques = document.querySelectorAll('article','section')

for (let bloque of colorBloques){
    bloque.addEventListener('click', changeColorBloques)
    function changeColorBloques(){
        bloque.style.background = '#FFC0CB' // rosa
    }
}

// Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.
    // 3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.
const cursorImg = document.querySelectorAll('img')

for (let imagen of cursorImg){
    imagen.addEventListener('mouseover', changeImg);
    function changeImg (){
        imagen.setAttribute('src','assets/abracadabra.gif')
    }
}

    // 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
const cursorP = document.querySelectorAll('p')

for (let parrafo of cursorP){
    parrafo.addEventListener('mouseover', changeColorP)
    function changeColorP (){
        parrafo.style.color = '#8B008B' 
        parrafo.style.background = '#0000FF'
    }
}

    // 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.
const cursorBloques = document.querySelectorAll('article','section')

for (let bloque of cursorBloques){
    bloque.addEventListener('mouseover', changeColorBloques)
    function changeColorBloques (){
        bloque.style.background = '#FF1493'
    }
}

// 4.Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.
const colors = ['red', 'blue', 'green']

const getRandom = (array) => {
    return array[Math.floor(Math.random()*array.length)];
}

console.log(getRandom(colors))

// 5.Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.
const coolors = ['#427aa1', '#043565', '#5158bb', '#f26df9', '#eb4b98']

for (let parrafo of colorP){
    parrafo.addEventListener('click', changeColorP)
    function changeColorP (){
        parrafo.style.color = getRandom(coolors)
        parrafo.style.background = getRandom(coolors)
    }
}

for (let bloque of colorBloques){
    bloque.addEventListener('click', changeColorBloques)
    function changeColorBloques(){
        bloque.style.background = getRandom(coolors)
    }
}

for (let parrafo of cursorP){
    parrafo.addEventListener('mouseover', changeColorP)
    function changeColorP (){
        parrafo.style.color = getRandom(coolors)
        parrafo.style.background = getRandom(coolors)
    }
}

for (let bloque of cursorBloques){
    bloque.addEventListener('mouseover', changeColorBloques)
    function changeColorBloques (){
        bloque.style.background = getRandom(coolors)
    }
}

// 6.Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.

const gifs = ['assets/magic-1.gif', 'assets/magic-2.gif', 'assets/magic-3.gif', 'assets/magic-4.gif', 'assets/magic-5.gif', 'assets/magic-1.gif','assets/magic-6.gif']

for (let imagen of clickImg){
    imagen.addEventListener('click', changeImg);
    function changeImg (){
        imagen.setAttribute('src', getRandom(gifs))
    }
}

for (let imagen of cursorImg){
    imagen.addEventListener('mouseover', changeImg);
    function changeImg (){
        imagen.setAttribute('src', getRandom(gifs))
    }
}