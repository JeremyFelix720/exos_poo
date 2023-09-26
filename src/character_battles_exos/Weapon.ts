import { Viking } from "./type/heroe/Viking";

export class Weapon {
    private name: string
    public strength: number

    constructor(name: string, strength: number) {
        this.name = name,
        this.strength = strength
    }
}