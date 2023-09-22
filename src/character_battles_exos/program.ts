import { BattleHandler } from "./BattleHandler.js";
// import { Team } from "./Team.js",
import { Character } from "./Character.js";
import { Viking } from "./type/Viking.js";
import { Archer } from "./type/Archer.js";
import { Knight } from "./type/Knight.js";
import { Wizard } from "./type/Wizard.js";
import { Thief } from "./type/Thief.js";
// import { Weapon } from "./Weapon.js";

export const character_battles_exos = () => {

    /*
    const bloodSlide = new Weapon("Lame de sang", 20);
    const lightningSword = new Weapon("Epee de foudre", 33);
    */

    //const viking1 = new Viking("Ragnar LODBROK", 140, 37, 25/*, lightningSword*/);
    //const viking2 = new Viking("Bjorn RAGNARSSON", 89, 25, 13/*, lightningSword*/);
    
    const viking = new Viking();
    const archer = new Archer();
    const knight = new Knight();
    const wizard = new Wizard();
    const thief = new Thief();
    
    const viking1 = new Character("Ragnar LODBROK", viking);
    const viking2 = new Character("Bjorn RAGNARSSON", viking);

    const archer1 = new Character ("Toto", archer); // le type Archer et aussi de type Job
    const archer2 = new Character("Tata", archer);

    const knight1 = new Character("Toto", knight);
    const knight2 = new Character("Tata", knight);

    const wizard1 = new Character("Toto", wizard);
    const wizard2 = new Character("Tata", wizard);

    const thief1 = new Character("Toto", thief);
    const thief2 = new Character("Tata", thief);
    

    /*
    const team1 = new Team(viking1, viking2);
    const team2 = new Team(knight1, knight2);

    //const battle = new BattleHandler(viking1, viking2);
    const battle = new BattleHandler(team1, team2);

    battle.startTheBattle();
    */
}