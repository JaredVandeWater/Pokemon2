import { ProxyState } from "../AppState.js";


function _draw(){
    document.getElementById('mainAttractionHTML').innerHTML = ProxyState.mainPokemon.Template
}
export default class MainPokemonController{
    constructor(){
        ProxyState.on("mainPokemon", _draw)
    }
    


    
}