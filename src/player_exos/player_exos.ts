import { Player } from "./player_class.js";
import { Team } from "./team_class.js";

export const player_exos = () => {

    const J1 = new Player("Kevin", "Durant", 37);
    const J2 = new Player("Victor", "Wembi", 19);

    const myTeam = new Team([J1, J2])

    myTeam.showNumberOfPlayers();
}