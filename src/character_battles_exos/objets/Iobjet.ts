import { Character } from "../Character";

export interface Iobjet {
    name: string;
    price: number;
    weight: number;
    use(character: Character): any;
}