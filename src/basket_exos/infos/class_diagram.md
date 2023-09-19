```mermaid
classDiagram
    class Player{
        -String firstname
        -String lastname
        -String age
    }

    class Team{
        -Player[] composition
        +number points
        +number showNumberOfPlayers()
    }

    class Arbiter{
        -Team team1
        -Team team2
        +decideWhatTeamWinTheMatch()
    }
```


