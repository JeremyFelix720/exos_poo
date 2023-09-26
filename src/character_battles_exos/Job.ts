import { Character } from "./Character.js";

export abstract class Job {
    private _jobName: string = "Viking" || "Archer" || "Chevalier" || "Thief" || "Wizar"
    private _healthBonus: number
    private _strengthBonus: number
    private _defenseBonus: number
    private _speedBonus: number
    private _intelligenceBonus: number
    private _manaBonus: number
    private _initialCriticalHitPercentageBonus: number
    private _specialAbilityMoment: string;

    constructor(jobName: string, healthBonus:number, strengthBonus:number, defenseBonus: number, speedBonus: number, intelligenceBonus: number, manaBonus:number, initialCriticalHitPercentageBonus:number, specialAbilityMoment: string) {
        this._jobName = jobName,
        this._healthBonus = healthBonus,
        this._strengthBonus = speedBonus,
        this._defenseBonus = defenseBonus,
        this._speedBonus = speedBonus,
        this._intelligenceBonus = intelligenceBonus,
        this._manaBonus = manaBonus,
        this._initialCriticalHitPercentageBonus = initialCriticalHitPercentageBonus,
        this._specialAbilityMoment = specialAbilityMoment
    }

    public useSpecialAbility(attacker: Character, defender: Character) :any{
        // Laisser vide. Cette méthode est appelée dans la classe BattleHandler pour déclencher la capacité spé de l'un des types de personnages (sans savoir lequel à l'avance).
    }


    /*
    public useSpecialAbility(attacker: Character, defender: Character) {
        switch (this._jobName) {
            case "Viking":
                 return Viking.useSpecialAbility(attacker, defender);
                 break;
        
             default:
                 break;
        }
    }
    */

    public get jobName(): string {
        return this._jobName;
    }
    public set jobName(value: string) {
        this._jobName = value;
    }

    public get healthBonus(): number {
        return this._healthBonus;
    }
    public set healthBonus(value: number) {
        this._healthBonus = value;
    }

    public get strengthBonus(): number {
        return this._strengthBonus;
    }
    public set strengthBonus(value: number) {
        this._strengthBonus = value;
    }

    public get defenseBonus(): number {
        return this._defenseBonus;
    }
    public set defenseBonus(value: number) {
        this._defenseBonus = value;
    }
    
    public get speedBonus(): number {
        return this._speedBonus;
    }
    public set speedBonus(value: number) {
        this._speedBonus = value;
    }
    
    public get intelligenceBonus(): number {
        return this._intelligenceBonus;
    }
    public set intelligenceBonus(value: number) {
        this._intelligenceBonus = value;
    }

    public get manaBonus(): number {
        return this._manaBonus
    }
    public set manaBonus(value: number) {
        this._manaBonus = value
    }

    public get initialCriticalHitPercentageBonus(): number {
        return this._initialCriticalHitPercentageBonus
    }
    public set initialCriticalHitPercentageBonus(value: number) {
        this._initialCriticalHitPercentageBonus = value
    }

    public get specialAbilityMoment(): string {
        return this._specialAbilityMoment;
    }
    public set specialAbilityMoment(value: string) {
        this._specialAbilityMoment = value;
    }

}