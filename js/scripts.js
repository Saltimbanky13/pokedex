console.log(poke)
const pokelista = document.querySelector(".pokelista")
const selectMin = document.querySelector("#selectMin")
const slectMax = document.querySelector("#selectMax")
const selectTipo = document.querySelector("#selectTipo")
let filtrado = [];

const recibido = {
    tipo: '',
    min: '',
    max: ''
}


iniciarApp()


function iniciarApp() {
    arrancarEventos()
    mostrarPokemon(poke)

}

function arrancarEventos() {

    selectTipo.addEventListener("change", crearObjeto)


}

function crearObjeto(e) {

    if (e.target.classList.contains("tipo")) {

        recibido.tipo = e.target.value
        filtrar(e)
    }
    // if (e.target.classList.contains("poder")) {

    //     recibido.poder = e.target.value
    //     filtrar(e)
    // }

}


function mostrarPokemon(pokearr) {

    pokearr.forEach((pokemon) => {
        let pokelement = document.createElement("li")
        pokelement.classList.add("list-group-item")
        pokelement.innerHTML = `
        
        <img src= ${pokemon.img} width="50">
        <span> --- ${pokemon.nombre}  --- </span>
        <span> ${pokemon.tipo} ---  </span>
        <span> poder: ${pokemon.poder} </span>
        
        `;
        pokelista.appendChild(pokelement);
    })
}

function filtrar(e) {

    if (recibido.tipo == "vacio" && recibido.poder == "") {
        borrarLista()

    } else {

        filtrado = poke.filter(filtrarTipo) /*.filter(filtrarPoder)*/

        borrarLista()

        mostrarPokemon(filtrado)
    }
}

function filtrarTipo(pokemon) {
    return pokemon.tipo == recibido.tipo;
}

/*function filtrarPoder(pokemon) {
    return pokemon.poder == recibido.poder;
}*/

function borrarLista() {
    while (pokelista.children.length > 0) {
        pokelista.firstChild.remove()
    }
}