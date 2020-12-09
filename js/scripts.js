console.log(poke)
const pokelista = document.querySelector(".pokelista")
const selectMin = document.querySelector("#selectMin")
const slectMax = document.querySelector("#selectMax")
const selectTipo = document.querySelector("#selectTipo")




iniciarApp()


function iniciarApp() {
    arrancarEventos()
    mostrarPokemon()

}

function arrancarEventos() {

    selectTipo.addEventListener("change", filtrarTipo)


}


function mostrarPokemon() {

    poke.forEach((pokemon) => {
        let pokelement = document.createElement("li")
        pokelement.classList.add("list-group-item")
        pokelement.innerHTML = `
        
        <img src= ${pokemon.img} width="50">
        <span> ${pokemon.nombre}  --- </span>
        <span> ${pokemon.tipo} ---  </span>
        <span> poder: ${pokemon.poder} </span>
        
        `;
        pokelista.appendChild(pokelement);
    })
}

function filtrarTipo(e) {
    console.log(e.target.value)

    let filtrado = poke.filter(pokemon => {
        console.log(pokemon.tipo);
        return pokemon.tipo == e.target.value;
    })

    console.log(filtrado)
}