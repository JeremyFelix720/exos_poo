import { Viking } from "./types/heroe/Viking";

export class Weapon {
    private name: string
    public strength: number

    constructor(name: string, strength: number) {
        this.name = name,
        this.strength = strength
    }
}