import { Job } from "../../Job.js";
import { Character } from "../../Character.js";


export class Knight extends Job {

    // Classe sans attribut.

    // À la création d'un personnage chevalier, il recoit un nom, +40 points de vie supplémentaires, +5 de force, +1 de vitesse, +1 d'intelligence, 5 points de mana et +3% de chance de coup critique.
    constructor(
    jobName: string = "Chevalier",
    healthBonus: number = 40,
    strengthBonus: number = 5,
    defenseBonus: number = 0,
    speedBonus: number = 1,
    intelligenceBonus: number = 1,
    manaBonus: number = 5,
    initialCriticalHitPercentageBonus: number = 3,
    specialAbilityMoment: string = "on hit"

    ) {
        super(jobName, healthBonus, strengthBonus, defenseBonus, speedBonus, intelligenceBonus, manaBonus, initialCriticalHitPercentageBonus, specialAbilityMoment)
    }

    // La capacité spéciale des chevaliers est l'utilisation de leur bouclier, ce sont d'ailleurs les seuls à pouvoir en utiliser un. Dès que le personnage recoit des dégats, il réduit les dégats subits de 25%, quelque soient les dégats reçus.
    public useSpecialAbility(attacker: Character, defender: Character) {
        let domageReducedRatio = 0.75;
        let domage = attacker.strength;
        let domageReduced = domage * domageReducedRatio;

        defender.domageReducedRatio = domageReducedRatio;

        console.log(defender.name + " utilise sa capacité spéciale en se servant de son bouclier pour réduire de 25% les dommages de la prochaine attaque de " + attacker.name + ".");
    }
}