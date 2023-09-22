import { Character } from "./Character";
import { Viking } from "./type/Viking";

export class BattleHandler {
    private viking1: Viking
    private viking2: Viking

    constructor(viking1: Viking, viking2: Viking) {
        this.viking1 = viking1,
        this.viking2 = viking2
    }

    public beforeAttack(attacker: Character, defender: Character) {
        attacker.BeforeAttack(attacker, defender); // çà permet d'accèder aux attributs / méthodes des classes filles de Job : Viking, etc.

        attacker.job.useSpecialAbility(attacker, defender); // ici, j'accède à une méthode spécifique de l'attaquant.

    }
    
    public attack(attacker: Character, defender: Character) {
        // attacker.Attack(); // reproduire la même logique qu'avec .BeforeAttack ?

        defender._health -= attacker.strength;
    }

    public afterAttack(attacker: Character, defender: Character) {
        // attacker.AfterAttack(); // reproduire la même logique qu'avec .BeforeAttack plus haut ? (repercution dans les fichiers Character, Job et dans les classes filles de Job)
    }

    // ???
    public onHit(attacker: Character, defender: Character) {
        defender.OnHit();
    }

    // Regrouper les méthodes ci-dessus là
    public startTheBattle(character1: Character, character2: Character) {

        let charactersSortedBySpeed: Character[] = [character1, character2].sort((c1, c2) => (c1.speed < c2.speed ? -1 : 1)); // Tri du tableau desordonné qui contient tous les persos actifs dans le combat pour en ressortir un tableau ordonnée avec le perso le plus rapide en index 0, etc.
        
        let attacker = charactersSortedBySpeed[0];
        let defender = charactersSortedBySpeed[1];



        while (defender.health > 0 && attacker.health > 0) {  
            
            this.beforeAttack(attacker, defender);
            this.attack(attacker, defender);
            this.afterAttack(attacker, defender);
            this.onHit(attacker, defender);



            //attacker.attack(defender, attacker.fightCriticalHitPercentage);

            if(defender.health <= 0) {
                console.log(defender.name + " a été vaincu... Le viking gagnant est " + attacker.name + " !");
                break; // met fin à la boucle while.
            }

            // attacker.weapon.useWeapon(attacker, defender);

            if(defender.health <= 0) {
                console.log("Le viking gagnant est " + attacker.name);
            } else {
                [defender,attacker] = [attacker, defender]; // intervertion entre l'attaquant et le défenseur.
            }
        }

        /*
        if(this.viking1.strength < this.viking2.strength) {
            attacker = this.viking1;
            defender = this.viking2;
        } else {
            attacker = this.viking2;
            defender = this.viking1;
        }
        */
        
        
    }
}
