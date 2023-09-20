import { Weapon } from "./weapon_class.js";

export class Viking {
    public name: string
    public health: number
    public strength: number
    public defense: number
    public weapon: Weapon
    public real_strength: number
    public maxHealth: number
    private initialCriticalHitPercentage: number
    public fightCriticalHitPercentage: number

    constructor(name: string, health:number, strength: number, defense: number, weapon: Weapon, real_strength: number = strength + weapon.strength, maxHealth:number = health, initialCriticalHitPercentage: number = 10, fightCriticalHitPercentage: number = 10) {
        this.name = name,
        this.health = health,
        this.strength = strength,
        this.defense = defense,
        this.weapon = weapon,
        this.real_strength = real_strength,
        this.maxHealth = maxHealth,
        this.initialCriticalHitPercentage = initialCriticalHitPercentage,
        this.fightCriticalHitPercentage = fightCriticalHitPercentage
    }

    public attack(vikingDefender: Viking, fightCriticalHitPercentage: number) {
        let defenderDefense = vikingDefender.defense;
        let fightStrength = this.real_strength;
        let criticalHitLuck = Math.floor(Math.random()*101) // génére un nombre entre 0 et 100.
        if(criticalHitLuck < fightCriticalHitPercentage) {
            fightStrength *=2;
            console.log(this.name + " va faire un coup critique !");
        }

        if(defenderDefense < this.real_strength) {
            vikingDefender.health -= fightStrength - defenderDefense;
            fightCriticalHitPercentage = this.initialCriticalHitPercentage; // réinitialisation du taux de coup critique après l'attaque.
            if(vikingDefender.health < 0) {
                vikingDefender.health = 0;
            }
            console.log(this.name + " a attaqué " + vikingDefender.name + " et lui a enlevé " + fightStrength + " PV ; il lui reste " + vikingDefender.health + " PV.");
        } else {
            console.log(this.name + " a attaqué " + vikingDefender.name + " mais il n'a perdu aucun PV car sa defense est supérieure a notre attaque.")
        }
    }
}