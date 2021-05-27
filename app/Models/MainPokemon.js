export class MainPokemon{
    constructor(data){
        this.name = data.name
        this.img = data.sprites.other.dream_world.front_default
        this.type1 = data.types[0].type.name



    }

    get Template(){
        return /*html*/`
            <h1 class="text-center">${this.name}</h1>
            <img  src="${this.img}"/>
            <h3>${this.type1}</h3>
        
        `
    }

    
}
