import { Job } from "../../Job.js";
import { Character } from "../../Character.js";


export class Thief extends Job {

    // Classe sans attribut.

    // À la création d'un personnage voleur, il recoit un nom, +15 points de vie supplémentaires, +2 de force, +5 de vitesse, +1 d'intelligence, 10 points de mana et +13% de chance de coup critique.
    constructor(
    jobName: string = "Voleur",
    healthBonus: number = 15,
    strengthBonus: number = 2,
    defenseBonus: number = 0,
    speedBonus: number = 5,
    intelligenceBonus: number = 1,
    manaBonus: number = 10,
    initialCriticalHitPercentageBonus: number = 13,
    specialAbilityMoment: string = "during attack"

    ) {
        super(jobName, healthBonus, strengthBonus, defenseBonus, speedBonus, intelligenceBonus, manaBonus, initialCriticalHitPercentageBonus, specialAbilityMoment)
    }

    // La capacité spéciale des voleurs et des voleuses est l'attaque surprise : lors d'un coup critique, les dégats infligés sont de 250% de la force du personnage. En plus, ces personnages peuvent réattaquer lors d'un coup critique.
    useSpecialAbility(attacker: Character, defender: Character) {
        
        console.log(attacker.name + " se prépare à utiliser sa capacité spéciale en cas de coup critique...");
    }
}