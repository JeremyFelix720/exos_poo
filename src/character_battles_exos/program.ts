import { BattleHandler } from "./BattleHandler.js";
// import { Team } from "./Team.js",
import { Character } from "./Character.js";
import { Viking } from "./types/heroe/Viking.js";
import { Archer } from "./types/heroe/Archer.js";
import { Knight } from "./types/heroe/Knight.js";
import { Wizard } from "./types/heroe/Wizard.js";
import { Thief } from "./types/heroe/Thief.js";
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

    const archer1 = new Character ("Mérida", archer); // le type Archer et aussi de type Job
    const archer2 = new Character("Robin des bois", archer);

    const knight1 = new Character("Bayard", knight);
    const knight2 = new Character("Hugues", knight);

    const thief1 = new Character("Chipper", thief);
    const thief2 = new Character("Rapetou", thief);

    const wizard1 = new Character("Merlin", wizard);
    const wizard2 = new Character("Oz", wizard);
    
    /*
    const team1 = new Team(viking1, viking2);
    const team2 = new Team(knight1, knight2);

    //const battle = new BattleHandler(viking1, viking2);
    const battle = new BattleHandler(team1, team2);
    */

    /*
    viking VS viking [OK]
    archer VS archer []
    knight VS knight []
    thief VS thief []

    viking VS archer []
    viking VS knight []
    viking VS thief []

    archer VS knight []
    archer VS thief []

    knight VS thief []
    */

    //console.log(archer1.health + " PV")
    const battle1 = new BattleHandler(archer1, archer2);
    battle1.startTheBattle();

    
}