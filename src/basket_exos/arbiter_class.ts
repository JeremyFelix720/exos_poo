import { Team } from "./team_class";

export class Arbiter {

    private team1: Team
    private team2: Team

    constructor(team1: Team, team2: Team) {
      this.team1 = team1
      this.team2 = team2
    }

    public decideWhatTeamWinTheMatch() {
        while (this.team1.points < 20 && this.team2.points < 20) {
            console.log("Nombre de point(s) de l'équipe 1 : " + this.team1.points + ". Nombre de point(s) de l'équipe 2 : " + this.team2.points)
            let hazardRoundWinner = Math.floor(Math.random()*2)
            if (hazardRoundWinner == 0) {
                this.team1.points += 1
                if(this.team1.points == 20) {
                    console.log("L'équipe 1 gagne le match !")
                }
            } else if (hazardRoundWinner == 1) {
                this.team2.points += 1
                if(this.team2.points == 20) {
                    console.log("L'équipe 2 gagne le match !")
                }
            }
        }
    }
  }