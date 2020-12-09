//EL FILTRO ES MUY ESTRICTO - CONSEGUIR QUE SI NO SELECCIONO NADA NO FILTRE

console.log(poke)
const pokelista = document.querySelector(".pokelista")

const selectPoder = document.querySelector("#selectPoder")
const selectMin = document.querySelector("#selectMin")
const slectMax = document.querySelector("#selectMax")
const selectTipo = document.querySelector("#selectTipo")
let filtrado = [];

const recibido = {
    tipo: '',
    poder: '',
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
    selectPoder.addEventListener("change", crearObjeto)
    selectMax.addEventListener("change", crearObjeto)
    selectMin.addEventListener("change", crearObjeto)

}

function crearObjeto(e) {

    if (e.target.classList.contains("tipo")) {

        recibido.tipo = e.target.value
        filtrar()
    }
    if (e.target.classList.contains("poder")) {

        recibido.poder = e.target.value
        filtrar()
    }
    if (e.target.classList.contains("min")) {

        recibido.min = e.target.value
        filtrar()
    }
    if (e.target.classList.contains("max")) {

        recibido.max = e.target.value
        filtrar()
    }
    console.log(recibido)
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

function filtrar() {

    filtrado = poke.filter(filtrarTipo).filter(filtrarPoder).filter(filtrarMin).filter(filtrarMax)

    if (filtrado.length > 0) {
        console.log(filtrado);

        borrarLista()

        mostrarPokemon(filtrado)

    } else {
        let sinresult = document.createElement("li")
        sinresult.classList.add("list-group-item", "text-danger", )
        sinresult.innerHTML = `
    
        <span> No existen pokemon asi subnormal</span>
        
        `;
        borrarLista()
        pokelista.appendChild(sinresult);

    }
}

function filtrarTipo(pokemon) {
    if (recibido.tipo) {
        return pokemon.tipo == recibido.tipo;
    }
    return pokemon
}

function filtrarPoder(pokemon) {
    if (recibido.poder) {
        return pokemon.poder == recibido.poder;
    }
    return pokemon
}

function filtrarMin(pokemon) {
    if (recibido.min) {
        return pokemon.poder >= recibido.min;
    }
    return pokemon
}

function filtrarMax(pokemon) {
    if (recibido.max) {
        return pokemon.poder <= recibido.max;
    }
    return pokemon
}

function borrarLista() {
    while (pokelista.children.length > 0) {
        pokelista.firstChild.remove()
    }
}