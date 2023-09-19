import { Team } from "./team_class";

export class Arbiter {

    private team1: Team
    private team2: Team
    private team3: Team
    private team4: Team

    constructor(team1: Team, team2: Team, team3: Team, team4: Team) {
      this.team1 = team1
      this.team2 = team2
      this.team3 = team3
      this.team4 = team4
    }

    private decideWhatTeamWinTheMatch(activeTeam1: Team, activeTeam2: Team) {
        while (activeTeam1.points < 20 && activeTeam2.points < 20) {
            // console.log("Nombre de point(s) de l'équipe 1 : " + activeTeam1.points + ". Nombre de point(s) de l'équipe 2 : " + this.team2.points)
            let hazardRoundWinner = Math.floor(Math.random()*2)
            if (hazardRoundWinner == 0) {
                activeTeam1.points += 1
                if(activeTeam1.points == 20) {
                    //console.log("L'équipe 1 gagne le match !")
                    return 1
                }
            } else if (hazardRoundWinner == 1) {
                activeTeam2.points += 1
                if(activeTeam2.points == 20) {
                    //console.log("L'équipe 2 gagne le match !")
                    return 2
                }
            }
        }
    }

    public decideWhatTeamWinTheTournament() {
        let semifinalWinner1: Team;
        let semifinalWinner2: Team;
        let semifinalLooser1: Team;
        let semifinalLooser2: Team;

        // Demie-finale : Premier match
        if (this.decideWhatTeamWinTheMatch(this.team1, this.team2) == 1 ) {
            console.log("L'équipe " + this.team1.name + " gagne la demie-finale et va en finale ! L'équipe " + this.team2.name + " perd la demie-finale et va au rattrapage...");
            //this.team1.rank -= 3 // 1
            semifinalWinner1 = this.team1;
            //this.team2.rank -= 1 // 3
            semifinalLooser1 = this.team2;
        } else {
            console.log("L'équipe " + this.team2.name + " gagne la demie-finale et va en finale ! L'équipe " + this.team1.name + " perd la demie-finale et va au rattrapage...");
            //this.team1.rank -= 1 // 3
            semifinalLooser1 = this.team1;
            //this.team2.rank -= 3 // 1
            semifinalWinner1 = this.team2;
        }

        // Demie-finale : Deuxième match
        if (this.decideWhatTeamWinTheMatch(this.team3, this.team4) == 1 ) {
            console.log("L'équipe " + this.team3.name + " gagne la demie-finale et va en finale ! L'équipe " + this.team4.name + " perd la demie-finale et va au rattrapage...");
            //this.team3.rank -= 3 // 1
            semifinalWinner2 = this.team3;
            //this.team4.rank -= 1 // 3
            semifinalLooser2 = this.team4;
        } else {
            console.log("L'équipe " + this.team4.name + " gagne la demie-finale et va en finale ! L'équipe " + this.team3.name + " perd la demie-finale et va au rattrapage...");
            //this.team3.rank -= 1 // 3
            semifinalLooser2 = this.team3;
            //this.team4.rank -= 3 // 1
            semifinalWinner2 = this.team4;
        }

        // Finale des gagnants de la demi-finale
        if (this.decideWhatTeamWinTheMatch(semifinalWinner1, semifinalWinner2) == 1 ) {
            console.log("L'équipe " + semifinalWinner1.name + " gagne le tournoi et termine 1er ! L'équipe " + semifinalWinner2.name + " termine 2ème du tournoi.");
        } else {
            console.log("L'équipe " + semifinalWinner2.name + " gagne le tournoi et termine 1er ! L'équipe " + semifinalWinner1.name + " termine 2ème du tournoi.");
        }

        // Match des perdants de la demi-finale
        if (this.decideWhatTeamWinTheMatch(semifinalLooser1, semifinalLooser2) == 1 ) {
            console.log("L'équipe " + semifinalLooser1.name + " termine 3ème du tournoi. L'équipe " + semifinalLooser2.name + " termine 4ème du tournoi.");
        } else {
            console.log("L'équipe " + semifinalLooser2.name + " termine 3ème du tournoi. L'équipe " + semifinalLooser1.name + " termine 4ème du tournoi.");
        }
    }
  }