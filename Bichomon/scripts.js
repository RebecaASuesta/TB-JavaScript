console.log(document.title);

// 1.Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
document.getElementById('gen-1').innerText = "Generasión 1 Pokimon";

// 2.Cambia el color de fondo de la primera generación de Pokimon.
document.getElementById('generasion1').style.background = "#ADD8E6";

// 3.Imprime por consola la URL de la página.
console.log(document.URL);

// 4.Imprime por consola el dominio de la página.
console.log(document.domain);

// 5.Imprime todos los nodos de imagen.
const imagenes = document.querySelectorAll('img')
console.log(imagenes);

//  6.Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
for(let imagen of imagenes){
    imagen.src="https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}


//  7.Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
// no va
const fondos = document.getElementsByClassName('infocard-lg-data')

for (let i = 0; i < fondos.length; i++){
    let small = fondos[i].querySelector('small:last-child').children;
    // console.log(small)
    for (let j = 0; j < small.length; j++){
        let aqui = small[j].innerHTML;
        // console.log(aqui)
        if (aqui == 'Flying'){
            fondos[i].parentNode.style.background = "blue";
        }
    }
}