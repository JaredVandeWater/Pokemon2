export class Pokemon{
    constructor(data){
        this.name = data.name
        this.url = data.url
    }


    get getAllTemplate(){
        return /*html*/ `
        <li>${this.name}
            <button onclick="app.pokemonsController.openPokeball('${this.url}')" class="btn" >
            <i class="mdi mdi-pokeball"></i>
            </button>
        </li>
        `
    }
}