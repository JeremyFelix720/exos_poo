import { Character } from "./Character";

export class BattleHandler {
    private _character1: Character
    private _character2: Character
    private _someoneIsDead: boolean;

    constructor(character1: Character, character2: Character, someoneIsDead: boolean = false) {
        this._character1 = character1,
        this._character2 = character2,
        this._someoneIsDead = someoneIsDead
    }

    // A utiliser avant l'attaque d'un "attacker".
    public beforeAttack(attacker: Character, defender: Character) {
        // attacker.derivativeJobClassesAccessor(attacker, defender); // çà permet d'accèder aux attributs / méthodes des classes filles de Job : Viking, etc.
        console.log("beforeAttack");
        if(attacker.job.jobName != "Archer") {
            if(defender.job.specialAbilityMoment == "before attack") {
                defender.job.useSpecialAbility(attacker, defender);
                this.checkIfSomeoneDead(attacker, defender);
            }
            if(attacker.job.specialAbilityMoment == "before attack") {
                attacker.job.useSpecialAbility(attacker, defender);
                this.checkIfSomeoneDead(attacker, defender);
            }
        }
    }
    
    // A utiliser pendant l'attaque d'un "attacker".
    public attack(attacker: Character, defender: Character) {
        console.log("attack");
        attacker.attack(defender);
        this.checkIfSomeoneDead(attacker, defender);
        if (!this.someoneIsDead) {
            if(defender.job.specialAbilityMoment == "during attack") {
                defender.job.useSpecialAbility(attacker, defender);
                this.checkIfSomeoneDead(attacker, defender);
            }
            if(attacker.job.specialAbilityMoment == "during attack") {
                attacker.job.useSpecialAbility(attacker, defender);
                this.checkIfSomeoneDead(attacker, defender);
            }
        }
    }

    // A utiliser après l'attaque d'un "attacker".
    public afterAttack(attacker: Character, defender: Character) {
        console.log("afterAttack");  
        if(defender.job.specialAbilityMoment == "after attack") {
            defender.job.useSpecialAbility(attacker, defender);
            this.checkIfSomeoneDead(attacker, defender);
        }
        if(attacker.job.specialAbilityMoment == "after attack") {
            attacker.job.useSpecialAbility(attacker, defender);
            this.checkIfSomeoneDead(attacker, defender);
        }
    }

    // A utiliser quand le "defender" prend un coup.
    public onHit(attacker: Character, defender: Character) {
        // defender.defend(attacker); // IL FAUT PAS QUE LE CHEVALIER PRENNE DES DEGATS AVANT DE POUVOIR UTILISER SA CAPACITE SPE !
        console.log("onHit");
        if(defender.job.specialAbilityMoment == "on hit") {
            defender.job.useSpecialAbility(attacker, defender);
            this.checkIfSomeoneDead(attacker, defender);
        }
        if(attacker.job.specialAbilityMoment == "on hit") {
            attacker.job.useSpecialAbility(attacker, defender);
            this.checkIfSomeoneDead(attacker, defender);
        }
    }

    public checkIfSomeoneDead(attacker: Character, defender: Character) {
        if(defender.health <= 0 || attacker.health <= 0) {
            this.someoneIsDead = true; // Met fin à la boucle while.
        }
    }

    // Regrouper les méthodes ci-dessus là
    public startTheBattle() {

        let character1 = this.character1;
        let character2 = this.character2;

        console.log(character1.name + " et " + character2.name + " vont s'affronter...");

        /*
        character1.derivativeJobClassesAccessor(character1, character2); // çà permet d'accèder aux attributs / méthodes des classes filles de Job : Viking, etc. pour le premier personnage.
        character2.derivativeJobClassesAccessor(character1, character2); // Idem pour le deuxième personnage ?
        */

        /*
        if(this.character1.strength < this.character2.strength) {
            attacker = this.character1;
            defender = this.character2;
        } else {
            attacker = this.character2;
            defender = this.character1;
        }
        */

        let charactersSortedBySpeed: Character[] = [character1, character2].sort((c1, c2) => (c1.speed < c2.speed ? -1 : 1)); // Tri du tableau desordonné qui contient tous les persos actifs dans le combat pour en ressortir un tableau ordonnée avec le personnage le plus rapide en index 0, etc.
        
        let attacker = charactersSortedBySpeed[0];
        console.log(attacker.name + " prend l'avantage pour le premier tour.");

        let defender = charactersSortedBySpeed[1];

        /*
        console.log("attaquant = " + attacker.name)
        console.log("defenseur = " + defender.name)
        */

        if(attacker.job.jobName == "Archer") { // Ne s'execute qu'une fois, au premier tour.
            attacker.job.useSpecialAbility(attacker, defender);
        }

        while (!this.someoneIsDead) {
                        
            this.beforeAttack(attacker, defender);
            this.attack(attacker, defender);
            this.afterAttack(attacker, defender);
            this.onHit(attacker, defender);

            // Réinitialisation des paramètres par défaut :
            attacker.domageReducedRatio = 1;
            defender.domageReducedRatio = 1;
            attacker.fightCriticalHitPercentage = attacker.initialCriticalHitPercentage;
            defender.fightCriticalHitPercentage = attacker.initialCriticalHitPercentage;

            if(!this.someoneIsDead) {
                [defender, attacker] = [attacker, defender]; // Intervertion entre l'attaquant et le défenseur.
            }

            // attacker.weapon.useWeapon(attacker, defender);
        }
        console.log(defender.name + " a été vaincu... Le gagnant du combat est " + attacker.name + " !");
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

    public get someoneIsDead(): boolean {
        return this._someoneIsDead;
    }
    public set someoneIsDead(value: boolean) {
        this._someoneIsDead = value;
    }
}
