// C'EST CETTE CLASSE QU'IL FAUDRA INSTANCIER DANS LE PROGRAMME.TS (avec comme param "name", "metier")

import { Job } from "./Job.js";
import { Viking } from "./type/Viking.js";
import { Archer } from "./type/Archer.js";
import { Knight } from "./type/Knight.js";
import { Wizard } from "./type/Wizard.js";
import { Thief } from "./type/Thief.js";

// import { Weapon } from "./Weapon.js";

/*
Tous les personnages auront désormais :

un nom, un niveau, d'un nombre de point d'expérience, un type, un nombre de points de vie (santé), une force, une vitesse, une intelligence, des points de mana (énergie magique) et un pourcentage de chance de coup critique.

Les personnages auront aussi un équipement, qui leur donnera la capacité de porter des objets sur leur tête, leurs mains, leur torse et leur jambes. // POUR MERCREDI 27/09 !
*/

/*
De base, chaque personnage démarre avec les caratéristiques suivantes :

un nom vide, au niveau 1, 0 point d'expérience, aucun type, 50 points de vie, 10 de force, 10 de vitesse, 10 d'intelligence 50 points de mana et 2% de chance de coup critique.
*/


export abstract class Character {

    private _name: string
    private _job: Job

    private _level: number
    private _experience: number
    public _health: number
    private _maxHealth: number
    private _strength: number
    //private _weapon: Weapon
    //private _real_strength: number
    private _defense: number
    private _domageReducedRatio: number;
    private _speed: number
    private _intelligence: number
    private _mana: number;
    private _initialCriticalHitPercentage: number
    private _fightCriticalHitPercentage: number
    private _hasTrap: boolean;


    constructor(
        name: string = "",
        job: Job,

        level: number = 1,
        experience: number = 0,
        health: number = 50,
        maxHealth:number = health,
        strength: number = 10,
        //weapon: Weapon,
        //real_strength: number = strength + weapon.strength,
        defense: number = 0,
        domageReducedRatio = 1,
        speed: number = 10,
        intelligence: number = 10,
        mana: number = 50,
        initialCriticalHitPercentage: number = 2,
        fightCriticalHitPercentage: number = 2,
        hasTrap = false

        ) {
        this._name = name,
        this._job = job;

        this._level = level,
        this._experience = experience,
        this._health = health + job.healthBonus,
        this._maxHealth = this._health,
        this._strength = strength + job.strengthBonus,
        //this._weapon = weapon,
        //this._real_strength = real_strength,
        this._defense = defense + job.defenseBonus,
        this._domageReducedRatio = domageReducedRatio,
        this._speed = speed + job.speedBonus,
        this._intelligence = intelligence + job.intelligenceBonus,
        this._mana = mana + job.manaBonus,
        this._initialCriticalHitPercentage = initialCriticalHitPercentage + job.initialCriticalHitPercentageBonus,
        this._fightCriticalHitPercentage = this._initialCriticalHitPercentage
        this._hasTrap = hasTrap

    }

    public derivativeJobClassesAccessor(attacker: Character, defender: Character) {
        this.job.useSpecialAbility(attacker, defender)
    }

    public attack(defender: Character) {

        if(defender.job.jobName == "Chevalier") {
            defender.domageReducedRatio = defender.job.useSpecialAbility(this, defender);
        }

        let criticalHitLuck = Math.floor(Math.random()*101) // génére un nombre entre 0 et 100.
        let domage = this.strength * defender.domageReducedRatio;
        
        if(criticalHitLuck < this.fightCriticalHitPercentage) {

            if(this.hasTrap == true) {
                this.health -= this.strength * 2.5;
            }

            if(this.job.jobName == "Voleur") {
                this.fightCriticalHitPercentage *= 2,5; // x 250% si c'est un voleur.
            } else {
                this.fightCriticalHitPercentage *= 2; // x 200% si ce n'est pas un voleur.
            }
            domage *= this.fightCriticalHitPercentage;
            defender.health -= domage;
            if(defender.health < 0) {
                defender.health = 0;
            }
            console.log(this.name + " a fait un coup critique qui a infligé " + domage + " à " + defender.name + " !");
        } else {
            defender.health -= domage;
            if(defender.health < 0) {
                defender.health = 0;
            }
            console.log(this.name + " a fait un coup normal qui a infligé " + domage + " à " + defender.name + ".");
        }



    }

    public defend(attacker: Character) {
        // N'est utile que pour le chevalier
    }

    public get name() : string {
        return this._name
    }
    public set name(value: string) {
        this._name = value;
    }
    
    public get level() : number {
        return this._level
    }
    public set level(value: number) {
        this._level = value;
    }
    
    public get experience() : number {
        return this._experience
    }
    public set experience(value: number) {
        this._experience = value;
    }
    
    public get job() : Job {
        return this._job
    }
    public set job(value: Job) {
        this._job = value;
    }

    public get health() : number {
        return this._health
    }
    public set health(value: number) {
        this._health = value;
    }

    public get maxHealth() : number {
        return this._maxHealth
    }
    public set maxHealth(value: number) {
        this._maxHealth = value;
    }

    public get strength() : number {
        return this._strength
    }
    public set strength(value: number) {
        this._strength = value;
    }

    /*
    public get real_strength() : number {
        return this._real_strength
    }
    public set real_strength(value: number) {
        this._real_strength = value;
    }

    public get weapon() : Weapon {
        return this._weapon
    }
    public set weapon(value: Weapon) {
        this._weapon = value;
    }
    */

    public get defense() : number {
        return this._defense
    }
    public set defense(value: number) {
        this._defense = value;
    }

    public get domageReducedRatio(): number {
        return this._domageReducedRatio;
    }
    public set domageReducedRatio(value: number) {
        this._domageReducedRatio = value;
    }

    public get speed() : number {
        return this._speed
    }
    public set speed(value: number) {
        this._speed = value;
    }

    public get intelligence() : number {
        return this._intelligence
    }
    public set intelligence(value: number) {
        this._intelligence = value;
    }

    public get mana(): number {
        return this._mana;
    }
    public set mana(value: number) {
        this._mana = value;
    }

    public get initialCriticalHitPercentage() : number {
        return this._initialCriticalHitPercentage
    }
    public set initialCriticalHitPercentage(value: number) {
        this._initialCriticalHitPercentage = value;
    }

    public get fightCriticalHitPercentage() : number {
        return this._fightCriticalHitPercentage
    }
    public set fightCriticalHitPercentage(value: number) {
        this._fightCriticalHitPercentage = value;
    }

    public get hasTrap(): boolean {
        return this._hasTrap;
    }
    public set hasTrap(value: boolean) {
        this._hasTrap = value;
    }
}