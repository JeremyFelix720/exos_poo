import { Character } from "../../Character";
import { Iobjet } from "../Iobjet";

export abstract class Consumable implements Iobjet {
    private _name: string;
    private _price: number;
    private _weight: number;

    constructor(name: string, price: number, weight: number) {
        this._name = name;
        this._price = price;
        this._weight = weight;
    }

    public use(character: Character) { 
        this.consume(character);
    }

    abstract consume(character: Character) : void  // La méthode abstraite consume(...) va aller chercher dans chaque classe fille si la méthode consume(...) existe et s'il la trouve, il l'execute (avec les données internes à la classe fille).

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }

    public get weight(): number {
        return this._weight;
    }
    public set weight(value: number) {
        this._weight = value;
    }
}