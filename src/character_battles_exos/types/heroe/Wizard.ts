import { Job } from "../../Job.js";
import { Character } from "../../Character.js";


export class Wizard extends Job {

    // Classe sans attribut.

    // À la création d'un personnage magicien, il recoit un nom, +5 points de vie supplémentaires, +1 de force, +1 de vitesse, +5 d'intelligence 45 points de mana et +0% de chance de coup critique.
    constructor(
    jobName: string = "Magicien",
    healthBonus: number = 5,
    strengthBonus: number = 1,
    defenseBonus: number = 0,
    speedBonus: number = 1,
    intelligenceBonus: number = 5,
    manaBonus: number = 45,
    initialCriticalHitPercentageBonus: number = 0,
    specialAbilityMoment: string = "before attack"
    ) {
        super(jobName, healthBonus, strengthBonus, defenseBonus, speedBonus, intelligenceBonus, manaBonus, initialCriticalHitPercentageBonus, specialAbilityMoment)
    }

    // La capacité spéciale des magiciens et des magiciennes est l'incantation et la récupération automatique de points de mana tous les tours. À tous les tours les personnages de type magicien récupère la moitié de leurs intelligence en points de mana. Les sorts se lancent automatiquement dans certaines conditions. Les magiciens et les magiciennes connaissent 1 sort à la création du personnage.
    useSpecialAbility(attacker: Character, defender: Character) {

    }
}