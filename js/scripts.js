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

}

function crearObjeto(e) {

    if (e.target.classList.contains("tipo")) {

        recibido.tipo = e.target.value
        filtrar(e)
    }
    if (e.target.classList.contains("poder")) {

        recibido.poder = e.target.value
        console.log(recibido)
        filtrar()
    }

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

    if (!recibido.tipo && !recibido.poder) {
        mostrarPokemon(poke)

    } else {

        console.log("llegamos al filtro...")

        filtrado = poke.filter(filtrarTipo).filter(filtrarPoder)

        console.log(filtrado);

        borrarLista()

        mostrarPokemon(filtrado)
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

function borrarLista() {
    while (pokelista.children.length > 0) {
        pokelista.firstChild.remove()
    }
}