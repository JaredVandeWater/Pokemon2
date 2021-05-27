import { ProxyState } from "../AppState.js";
import { pokemonsService } from "../Services/PokemonsService.js";





function _draw(){
    let template = ''
    ProxyState.allLinkPokemon.forEach(p => template += p.getAllTemplate)
    document.getElementById('LPokemonHTML').innerHTML = template
}

export class PokemonsController{
    constructor(){
        ProxyState.on("allLinkPokemon", _draw)
        this.getAllLinkPokemon()
        _draw()
    }


    openPokeball(url){
        pokemonsService.openPokeball(url)
    }

    getAllLinkPokemon(){
        try {
            console.log('ahh');
            pokemonsService.getAllLinkPokemon()
        } catch (error) {
            console.error(error)
        }
    }
}
