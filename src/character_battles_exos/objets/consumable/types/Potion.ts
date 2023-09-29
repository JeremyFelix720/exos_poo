import { Consumable } from "../Consumable";
import { Character } from "../../../Character";

export enum potionEffect {
    life,
    mana
}

export enum potionPower { 
    feeble = 10,
    medium = 45,
    strong = 100
}

export class Potion extends Consumable {

    private _potionEffect: potionEffect;
    private _potionPower: potionPower;

    constructor(name: string, price: number, weight: number, potionEffect: potionEffect, potionPower: potionPower) {
        super(name, price, weight);
        this._potionEffect = potionEffect;
        this._potionPower = potionPower;
    }

    public use(character: Character) {
        super.use(character);
    }
    
    public consume(character: Character) {
        switch(this._potionEffect) { 
            case potionEffect.life: { 
                character.recupHealth(this);
                break; 
            } 
            case potionEffect.mana: { 
                character.recupMana(this);
                break; 
            } 
            default: { 
                console.log("Le type de potion n'existe pas.")
                break; 
            } 
        } 
        console.log("La potion " + this.name + "(+" + this.name + ") a été bue !");
    }

    public get potionEffect(): number {
        return this._potionEffect;
    }
    public set potionEffect(value: number) {
        this._potionEffect = value;
    }
    
    public get potionPower(): number {
        return this._potionPower;
    }
    public set potionPower(value: number) {
        this._potionPower = value;
    }
}