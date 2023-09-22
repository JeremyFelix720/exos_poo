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


export class Character /*extends Job*/ {

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
    private _speed: number
    private _intelligence: number
    private _mana:number
    private _initialCriticalHitPercentage: number
    private _fightCriticalHitPercentage: number

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
        speed: number = 10,
        intelligence: number = 10,
        mana: number = 50,
        initialCriticalHitPercentage: number = 2,
        fightCriticalHitPercentage: number = 2
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
        this._speed = speed + job.speedBonus,
        this._intelligence = intelligence + job.intelligenceBonus,
        this._mana = mana + job.manaBonus,
        this._initialCriticalHitPercentage = initialCriticalHitPercentage + job.initialCriticalHitPercentageBonus,
        this._fightCriticalHitPercentage = this._initialCriticalHitPercentage
    }

    BeforeAttack(attacker: Character, defender: Character) {
        this.job.useSpecialAbility(attacker, defender)
    }

    public get name() : string {
        return this._name
    }
    // + METHODE SET

    public get level() : number {
        return this._level
    }
    // + METHODE SET

    public get experience() : number {
        return this._experience
    }
    // + METHODE SET

    public get job() : Job {
        return this._job
    }
    // ETC.

    public get health() : number {
        return this._health
    }

    public get maxHealth() : number {
        return this._maxHealth
    }

    public get strength() : number {
        return this._strength
    }

    /*
    public get weapon() : Weapon {
        return this._weapon
    }

    public get real_strength() : number {
        return this._real_strength
    }
    */

    public get defense() : number {
        return this._defense
    }

    public get speed() : number {
        return this._speed
    }

    public get intelligence() : number {
        return this._intelligence
    }

    public get mana() : number {
        return this._mana
    }

    public get initialCriticalHitPercentage() : number {
        return this._initialCriticalHitPercentage
    }

    public get fightCriticalHitPercentage() : number {
        return this._fightCriticalHitPercentage
    }
    
    /*
    public get color():string {
        return this._color;
    }

    public set color(color:string) {
        this._color = color;
    }
    */

}