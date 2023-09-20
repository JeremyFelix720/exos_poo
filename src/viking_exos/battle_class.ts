import { Viking } from "./viking_class";

export class Battle {
    private viking1: Viking
    private viking2: Viking

    constructor(viking1: Viking, viking2: Viking) {
        this.viking1 = viking1,
        this.viking2 = viking2
    }

    public startTheBattle() {
        let attacker: Viking;
        let defender: Viking;
        let exchange: Viking;

        if(this.viking1.strength < this.viking2.strength) {
            attacker = this.viking1;
            defender = this.viking2;
        } else {
            attacker = this.viking2;
            defender = this.viking1;
        }
        
        while (defender.health > 0 && attacker.health > 0) {                
            attacker.attack(defender, attacker.fightCriticalHitPercentage);

            if(defender.health <= 0) {
                console.log("Le viking gagnant est " + attacker.name);
                break; // met fin à la boucle while.
            }

            attacker.weapon.useWeapon(attacker, defender);

            if(defender.health <= 0) {
                console.log("Le viking gagnant est " + attacker.name);
            } else {
                [defender,attacker] = [attacker, defender]; // intervertion entre l'attaquant et le défenseur.
            }
        }
    }
}
