import { Player } from "./player_class";

export class Team {

    private composition: Array<Player>
    public points: number
  
    constructor(composition: Array<Player>, points: number = 0) {
      this.composition = composition
      this.points = points // valeur par défaut attribué.
    }

    public showNumberOfPlayers() {
        console.log("Mon équipe comporte " + this.composition.length + " joueurs.")
    }
  }