import { Player } from "./player_class";

export class Team {

    private composition: Array<Player>
  
    constructor(composition: Array<Player>) {
      this.composition = composition
    }

    public showNumberOfPlayers() {
        console.log("Mon équipe comporte " + this.composition.length + " joueurs.")
    }
  }