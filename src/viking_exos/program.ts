import { Viking } from "./viking_class.js";
import { Weapon } from "./weapon_class.js";
import { Battle } from "./battle_class.js";

export const viking_exos = () => {

    const bloodSlide = new Weapon("Lame de sang", 20);
    const lightningSword = new Weapon("Epee de foudre", 33);

    const viking1 = new Viking("Ragnar LODBROK", 140, 37, 25, bloodSlide);
    const viking2 = new Viking("Bjorn RAGNARSSON", 89, 25, 13, lightningSword);

    const battle = new Battle(viking1, viking2);

    battle.startTheBattle();
}