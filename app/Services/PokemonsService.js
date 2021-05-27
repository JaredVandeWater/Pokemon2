import { ProxyState } from "../AppState.js"
import { MainPokemon } from "../Models/MainPokemon.js";
import { Pokemon } from "../Models/Pokemon.js"
import { AllPokeApi } from "./AxiosService.js"

class PokemonsService{

async getAllLinkPokemon(){
    let res = await AllPokeApi.get('')
    console.log(res);
    ProxyState.allLinkPokemon = res.data.results.map(c=> new Pokemon(c))
}
async openPokeball(url){
    let res = await AllPokeApi.get(url)
    console.log(res, 'service res');
    ProxyState.mainPokemon = new MainPokemon(res.data)
    console.log(ProxyState.mainPokemon, 'service mainp');
}



}

export const pokemonsService = new PokemonsService()