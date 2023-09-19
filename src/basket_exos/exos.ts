/*
0 - A partir du diagramme de séquence fourni, faire le diagramme de classe puis le codage.
1 - Créer un match de basket entre deux équipes de deux joueurs chacune
2 - Créer un tournoi avec 4 équipes (l'équipe gagnante est la première à arriver à 20 points)
*/

import { Player } from "./player_class.js";
import { Team } from "./team_class.js";
import { Arbiter } from "./arbiter_class.js";


export const basket_exos = () => {

    const J1 = new Player("Kevin", "DURANT", 34);
    const J2 = new Player("Victor", "WEMBANYAMA", 19);

    const J3 = new Player("Tony", "PARKER", 41);
    const J4 = new Player("Tim", "DUNCAN", 47);

    const J5 = new Player("Bill", "RUSSELL", 89);
    const J6 = new Player("Larry", "BIRD", 66);

    const J7 = new Player("Wilt", "CHAMBERLAIN", 87);
    const J8 = new Player("Magic", "JOHNSON", 64);


    const team1 = new Team("A", [J1, J2]);
    const team2 = new Team("B", [J3, J4]);
    const team3 = new Team("C", [J5, J6]);
    const team4 = new Team("D", [J7, J8]);

    //team1.showNumberOfPlayers();

    const arbiter = new Arbiter(team1, team2, team3, team4);

    //arbiter.decideWhatTeamWinTheMatch(activeTeam1, activeTeam2);

    arbiter.decideWhatTeamWinTheTournament();

}