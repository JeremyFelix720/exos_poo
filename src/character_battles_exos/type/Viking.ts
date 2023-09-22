import { Job } from "../Job.js";
import { Character } from "../Character.js";

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
    initialCriticalHitPercentageBonus: number = 8
    ) {
        super(jobName, healthBonus, strengthBonus, speedBonus, defenseBonus, intelligenceBonus, manaBonus, initialCriticalHitPercentageBonus)
    }

    // La capacité spéciale des nouveaux vikings est le vol de vie. Chacune de leurs attaques permet de récupérer 15% des dégats infligés en points de santé et 3% en points de mana.
        useSpecialAbility(attacker: Character, defender: Character) {

        let damage;

        if(attacker.health == attacker.maxHealth) {
            console.log(attacker.name + " utilise la " + attacker.name + " pour récupérer des PV et des PM après avoir attaqué mais il a déjà ses PV au max."); 
        } else {
            if(defender.defense < attacker.strength) {
                damage = attacker.strength - defender.defense ;
                let bonusHealth = Math.floor(damage * 0.15);
                let bonusMana = Math.floor(damage * 0.03);
                if(attacker.maxHealth - attacker.health < bonusHealth) {
                    bonusHealth = attacker.maxHealth - attacker.health;
                }
                attacker._health += bonusHealth;
                attacker.mana += bonusMana;
                console.log(attacker.name + " utilise sa capacité spéciale pour récupérer " + bonusHealth + " PV et " + bonusMana + " PM après avoir attaqué ; il a maintenant " + attacker.health + " PV et " + attacker.mana + " PM.");
            } else {
                console.log(attacker.name + " utilise sa capacité spéciale pour récupérer des PV et des PM après avoir attaqué mais c'est un échec car il n'a fait aucun dégat à " + defender.name + ".");
            }
        }
    }

    public attack(attacker: Character, defender: Character) {
        let fightStrength = attacker.strength; /*this.real_strength;*/
        let criticalHitLuck = Math.floor(Math.random()*101) // génére un nombre entre 0 et 100.
        if(criticalHitLuck < attacker.fightCriticalHitPercentage) {
            fightStrength *=2;
            console.log(attacker.name + " va faire un coup critique !");
        }
        if(defender.defense < attacker.strength /*this.real_strength*/) {
            defender._health -= fightStrength - defender.defense;
            attacker.fightCriticalHitPercentage = attacker.initialCriticalHitPercentage; // réinitialisation du taux de coup critique après l'attaque.
            if(defender.health < 0) {
                defender._health = 0;
            }
            console.log(attacker.name + " a attaqué " + defender.name + " et lui a enlevé " + fightStrength + " PV ; il lui reste " + defender.health + " PV.");
        } else {
            console.log(attacker.name + " a attaqué " + defender.name + " mais il n'a perdu aucun PV car sa defense est supérieure l'attaque de " + attacker.name + ".");
        }
    }
}