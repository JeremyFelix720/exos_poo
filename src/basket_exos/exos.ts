/*
0 - A partir du diagramme de séquence fourni, faire le diagramme de classe puis le codage.
1 - Créer un match de basket entre deux équipes de deux joueurs chacune
2 - Créer un tournoi avec 4 équipes (l'équipe gagnante est la première à arriver à 20 points)
*/

import { Player } from "./player_class.js";
import { Team } from "./team_class.js";
import { Arbiter } from "./arbiter_class.js";


export const basket_exos = () => {

    const J1 = new Player("Kevin", "DURANT", 37);
    const J2 = new Player("Victor", "WEMBI", 19);
    const J3 = new Player("Tony", "PARKER", 41);
    const J4 = new Player("Tim", "DUNCAN", 47);

    const team1 = new Team([J1, J2]);
    const team2 = new Team([J3, J4]);

    //team1.showNumberOfPlayers();

    const arbiter = new Arbiter(team1, team2);

    arbiter.decideWhatTeamWinTheMatch();
}