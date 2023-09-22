import { Viking } from "./type/Viking";

export class Weapon {
    private name: string
    public strength: number

    constructor(name: string, strength: number) {
        this.name = name,
        this.strength = strength
    }

    // ne pas utiliser cette méthode
    public useBloodSlide(vikingAttacker: Viking, vikingDefender: Viking) {
        if(vikingAttacker.health == vikingAttacker.maxHealth) {
            console.log(vikingAttacker.name + " utilise la " + this.name + " pour récupérer des PV après avoir attaqué mais il a déjà ses PV au max."); 
        } else {
            if(vikingDefender.defense < vikingAttacker.strength /*vikingAttacker.real_strength*/) {
                let stolen_life = Math.floor(vikingAttacker.strength /*vikingAttacker.real_strength*/ * 0.15);
                if(vikingAttacker.maxHealth - vikingAttacker.health < stolen_life) {
                    stolen_life = vikingAttacker.maxHealth - vikingAttacker.health;
                }
                vikingAttacker._health += stolen_life;
                console.log(vikingAttacker.name + " utilise la " + this.name + " pour récupérer " + stolen_life + " PV après avoir attaqué ; il a maintenant " + vikingAttacker.health + " PV.");
            } else {
                console.log(vikingAttacker.name + " utilise la " + this.name + " pour récupérer des PV après avoir attaqué mais c'est un échec car il n'a fait aucun dégat à " + vikingDefender.name + ".");
            }
        }
    }

    public useLightningSword(vikingAttacker: Viking, vikingDefender: Viking) {
        if(vikingDefender._health <= 30) {
            vikingDefender._health = 0;
            console.log(vikingAttacker.name + " utilise l'" + this.name + " pour achever " + vikingDefender.name + ".");
        } else {
            console.log(vikingAttacker.name + " veut utiliser l'" + this.name + " pour achever l'adversaire mais " + vikingDefender.name + " a plus de 30 PV ; l'arme ne peut donc pas être utilisée.");
        }
    }
}