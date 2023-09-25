import { Character } from "./Character";
import { Viking } from "./type/Viking";
// import { Job } from "./Job";


export class BattleHandler {
    private _character1: Character;
    private _character2: Character

    constructor(character1: Character, character2: Character, trapSetting: boolean) {
        this._character1 = character1,
        this._character2 = character2
    }

    public get character1(): Character {
        return this._character1;
    }
    public set character1(value: Character) {
        this._character1 = value;
    }

    public get character2(): Character {
        return this._character2;
    }
    public set character2(value: Character) {
        this._character2 = value;
    }


    // A utiliser avant l'attaque d'un "attacker".
    public beforeAttack(attacker: Character, defender: Character) {
        // attacker.derivativeJobClassesAccessor(attacker, defender); // çà permet d'accèder aux attributs / méthodes des classes filles de Job : Viking, etc.

        if(attacker.job.jobName != "Archer" && defender.job.specialAbilityMoment == "before attack") {
            defender.job.useSpecialAbility(attacker, defender);
        }

        if(attacker.job.jobName != "Archer" && attacker.job.specialAbilityMoment == "before attack") {
            attacker.job.useSpecialAbility(attacker, defender);
        }
    }
    
    // A utiliser pendant l'attaque d'un "attacker".
    public attack(attacker: Character, defender: Character) {
        // attacker.Attack(); // reproduire la même logique qu'avec .BeforeAttack ?

        if(attacker.job.specialAbilityMoment == "during attack") {
            attacker.job.useSpecialAbility(attacker, defender);

            attacker.attack(defender);

            /*
            if (defender.health == 0) {
                return true;
            } else {
                return false;
            }
            */
        }

    }

    // A utiliser après l'attaque d'un "attacker".
    public afterAttack(attacker: Character, defender: Character) {
        // attacker.AfterAttack(); // reproduire la même logique qu'avec .BeforeAttack plus haut ? (repercution dans les fichiers Character, Job et dans les classes filles de Job)
    
        if(attacker.job.specialAbilityMoment == "after attack") {
            attacker.job.useSpecialAbility(attacker, defender);
        }
    }

    // A utiliser quand le "defender" prend un coup.
    public onHit(attacker: Character, defender: Character) {
        // defender.OnHit();

        defender.defend(attacker); // IL FAUT PAS QUE LE CHEVALIER PRENNE DES DEGATS AVANT DE POUVOIR UTILISER SA CAPACITE SPE !

        if(attacker.job.specialAbilityMoment == "on hit") {
            attacker.job.useSpecialAbility(attacker, defender);
        }
    }

    public checkIfSomeoneDead(attacker: Character, defender: Character) {
        if(defender.health <= 0) {
            console.log(defender.name + " a été vaincu... Le viking gagnant est " + attacker.name + " !");
            return true; // Met fin à la boucle while.
        } else {
            return false;
        }
    }


    // Regrouper les méthodes ci-dessus là
    public startTheBattle(character1: Character, character2: Character) {

        character1.derivativeJobClassesAccessor(character1, character2); // çà permet d'accèder aux attributs / méthodes des classes filles de Job : Viking, etc. pour le premier personnage.

        character2.derivativeJobClassesAccessor(character1, character2); // Idem pour le deuxième personnage.


        let charactersSortedBySpeed: Character[] = [character1, character2].sort((c1, c2) => (c1.speed < c2.speed ? -1 : 1)); // Tri du tableau desordonné qui contient tous les persos actifs dans le combat pour en ressortir un tableau ordonnée avec le perso le plus rapide en index 0, etc.
        
        let attacker = charactersSortedBySpeed[0];
        let defender = charactersSortedBySpeed[1];

        if(attacker.job.jobName == "Archer") { // Ne s'execute qu'une fois, au premier tour.
            attacker.job.useSpecialAbility(attacker, defender);
        }

        while (this.checkIfSomeoneDead(attacker, defender)! /*defender.health > 0 && attacker.health > 0*/) {  
            
            this.beforeAttack(attacker, defender);
            this.checkIfSomeoneDead(attacker, defender);

            this.attack(attacker, defender);
            this.checkIfSomeoneDead(attacker, defender);

            this.afterAttack(attacker, defender);
            this.checkIfSomeoneDead(attacker, defender);

            this.onHit(attacker, defender);
            this.checkIfSomeoneDead(attacker, defender);

            // Réinitialisation des paramètres par défaut
            attacker.domageReducedRatio = 1;
            defender.domageReducedRatio = 1;
            attacker.fightCriticalHitPercentage = attacker.initialCriticalHitPercentage;
            defender.fightCriticalHitPercentage = attacker.initialCriticalHitPercentage;

            [defender,attacker] = [attacker, defender] // intervertion entre l'attaquant et le défenseur.

            // attacker.weapon.useWeapon(attacker, defender);

            /*
            if(defender.health <= 0) {
                console.log("Le viking gagnant est " + attacker.name);
            } else {
                [defender,attacker] = [attacker, defender]; // intervertion entre l'attaquant et le défenseur.
            }
            */
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
