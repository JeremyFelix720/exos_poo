import { Player } from "./Player";

export class Team {

  public name: string
  private composition: Array<Player>
  public points: number
  
  constructor(name: string, composition: Array<Player>, points: number = 0) {
    this.name = name
    this.composition = composition
    this.points = points // valeur par défaut attribué.
  }

  public showNumberOfPlayers() {
    console.log("Mon équipe comporte " + this.composition.length + " joueurs.")
  }
}