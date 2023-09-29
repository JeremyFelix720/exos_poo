import { Character } from "../../../Character";
import { Consumable } from "../Consumable";

export class Ingredient extends Consumable {

    constructor(name: string, price: number, weight: number, healthRegeneration: number, manaRegeneration: number) {
        super(name, price, weight);
    }

    public use(character: Character) {
        super.use(character);
    }
    
    public consume(character: Character) {
        console.log(character.name + " a consommé l'ingrédient " + this.name + ".");
    }
}