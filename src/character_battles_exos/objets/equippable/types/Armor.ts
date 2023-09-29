import { Equippable } from "../Equippable";

export class Armor extends Equippable {

    constructor(name: string, price: number, weight: number, level: number) {
        super(name, price, weight, level);
    }

    public use(): any {
        console.log("L'armure " + this.name + " est utilisée.");
    }
}