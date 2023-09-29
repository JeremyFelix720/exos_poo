import { Iobjet } from "../Iobjet";
import { Character } from "../../Character";

export abstract class Equippable implements Iobjet {
    private _name: string;
    private _price: number;
    private _weight: number;
    private _level: number;

    constructor(name: string, price: number, weight: number, level: number) {
        this._name = name;
        this._price = price;
        this._weight = weight;
        this._level = level;
    }

    public equip(character: Character): any {
        //
    }

    public use(character: Character): any {
        if(character.level > this.level) {
            if(character.level >= this.level) {
                this.equip(character);
                console.log("");
            } else {
                console.log("");
            }
        }
    }

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

    public get level(): number {
        return this._level;
    }
    public set level(value: number) {
        this._level = value;
    }
}