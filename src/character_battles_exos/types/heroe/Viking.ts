import { Job } from "../../Job.js";
import { Character } from "../../Character.js";

export class Viking extends Job {

    // Classe sans attribut.

    // À la création d'un personnage viking, il recoit un nom, +25 points de vie supplémentaires, +4 de force, +2 de vitesse, 0 d'intelligence 0 points de mana et +8% de chance de coup critique.
    constructor(
    jobName: string = "Viking",
    healthBonus: number = 25,
    strengthBonus: number = 4,
    defenseBonus: number = 0,
    speedBonus: number = 2,
    intelligenceBonus: number = 0,
    manaBonus: number = 0,
    initialCriticalHitPercentageBonus: number = 8,
    specialAbilityMoment: string = "during attack"
    ) {
        super(jobName, healthBonus, strengthBonus, speedBonus, defenseBonus, intelligenceBonus, manaBonus, initialCriticalHitPercentageBonus, specialAbilityMoment)
    }

    // La capacité spéciale des nouveaux vikings est le vol de vie. Chacune de leurs attaques permet de récupérer 15% des dégats infligés en points de santé et 3% en points de mana.
        useSpecialAbility(attacker: Character, defender: Character) { // Méthode surchargée.

        let damage;

        if(attacker.health == attacker.maxHealth) {
            console.log(attacker.name + " utilise sa capacité spéciale en se servant de la lame de sang pour récupérer des PV et des PM après avoir attaqué mais il a déjà ses PV au max."); 
        } else {
            if(defender.defense < attacker.strength) {
                damage = attacker.strength - defender.defense ;
                let bonusHealth = Math.floor(damage * 0.15);
                let bonusMana = Math.floor(damage * 0.03);
                if(attacker.maxHealth - attacker.health < bonusHealth) {
                    bonusHealth = attacker.maxHealth - attacker.health;
                }
                if(attacker.maxMana - attacker.mana < bonusMana) {
                    bonusMana = attacker.maxMana - attacker.mana;
                }
                attacker.health += bonusHealth;
                attacker.mana += bonusMana;
                console.log(attacker.name + " utilise sa capacité spéciale pour récupérer " + bonusHealth + " PV et " + bonusMana + " PM après avoir attaqué ; il a maintenant " + attacker.health + " PV et " + attacker.mana + " PM.");
            } else {
                console.log(attacker.name + " utilise sa capacité spéciale pour récupérer des PV et des PM après avoir attaqué mais c'est un échec car il n'a fait aucun dégat à " + defender.name + ".");
            }
        }
    }
}