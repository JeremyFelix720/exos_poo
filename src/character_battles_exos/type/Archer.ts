import { BattleHandler } from "../BattleHandler.js";
import { Character } from "../Character.js";
import { Job } from "../Job.js";

export class Archer extends Job {

    // Classe sans attribut.

    // À la création d'un personnage archer, il recoit un nom, +15 points de vie supplémentaires, +2 de force, +3 de vitesse, +1 d'intelligence 10 points de mana et +5% de chance de coup critique.
    constructor(
    jobName: string = "Archer",
    healthBonus: number = 15,
    strengthBonus: number = 2,
    defenseBonus: number = 0,
    speedBonus: number = 3,
    intelligenceBonus: number = 1,
    manaBonus: number = 10,
    initialCriticalHitPercentageBonus: number = 5
    ) {
        super(jobName, healthBonus, strengthBonus, defenseBonus, speedBonus, intelligenceBonus, manaBonus, initialCriticalHitPercentageBonus)
    }

    // La capacité spéciale des archers et des archères est la pose de piège. Au début du combat, si le personnage est plus rapide que son adversaire alors le personnage peut poser un piège qui s'active à la première attaque de l'adversaire et inflige 250% des dégats d'une attaque normale.
    useSpecialAbility(attacker: Character, defender: Character) {
        /*
        if(attacker.speed > defender.speed) {

        }
        */

        //let characterRank: Character[] = [attacker, defender].sort((element1, element2) => {})
    }
}