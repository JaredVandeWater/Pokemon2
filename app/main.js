import MainPokemonController from "./Controllers/MainPokemonController.js";
import { PokemonsController } from "./Controllers/PokemonsController.js";

class App {
  pokemonsController = new PokemonsController();
  mainPokemonController = new MainPokemonController();

}

window["app"] = new App();
