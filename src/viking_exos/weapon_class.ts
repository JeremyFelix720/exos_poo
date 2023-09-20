import { Viking } from "./viking_class";

export class Weapon {
    private name: string
    public strength: number

    constructor(name: string, strength: number) {
        this.name = name,
        this.strength = strength
    }

    public useWeapon(vikingAttacker: Viking, vikingDefender: Viking) {
        if(vikingAttacker.weapon.name == "Lame de sang") {
            if(vikingAttacker.health == vikingAttacker.maxHealth) {
                console.log(vikingAttacker.name + " utilise la " + this.name + " pour récupérer des PV après avoir attaqué mais il a déjà ses PV au max."); 
            } else {
                let stolen_life = Math.floor(vikingAttacker.real_strength * 0.13);
                if(vikingAttacker.maxHealth - vikingAttacker.health < stolen_life) {
                    stolen_life = vikingAttacker.maxHealth - vikingAttacker.health;
                }
                vikingAttacker.health += stolen_life;
                console.log(vikingAttacker.name + " utilise la " + this.name + " pour récupérer " + stolen_life + " PV après avoir attaqué ; il a maintenant " + vikingAttacker.health + " PV.");
            }
        } else if(vikingAttacker.weapon.name == "Epee de foudre") {
            if(vikingDefender.health <= 30) {
                vikingDefender.health = 0;
                console.log(vikingAttacker.name + " utilise l'" + this.name + " pour achever " + vikingDefender.name + ".");
            } else {
                console.log(vikingAttacker.name + " veut utiliser l'" + this.name + " pour achever l'adversaire mais " + vikingDefender.name + " a plus de 30 PV ; l'arme ne peut donc pas être utilisée.");
            }
        }
    }
}