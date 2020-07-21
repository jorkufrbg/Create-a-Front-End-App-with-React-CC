// / Create an empty team object.
const team = {

    //Add two properties to your team object. A _players property and a _games property that are both initialized to empty arrays.
    _players: [
        //Populate the empty array that corresponds to the _players key in your team object with three actual players
        {
            firstName: 'Peter',
            lastName: 'Griffin',
            age: 46
        },
        {
            firstName: 'Glenn',
            lastName: 'Quagmire',
            age: 61
        },
        {
            firstName: 'Joe',
            lastName: 'Swanson',
            age: 45
        }
    ],

    //Add two properties to your team object. A _players property and a _games property that are both initialized to empty arrays.
    _games: [
        //Populate the empty array that corresponds to the _games key in your object with three actual games
        {
            opponent: 'The Simpsons',
            teamPoints: 684,
            opponentPoints: 349
        },
        {
            opponent: 'Rick & Morty',
            teamPoints: 41,
            opponentPoints: 150
        },
        {
            opponent: "Bob's Burgers",
            teamPoints: 150,
            opponentPoints: 300
        }
    ],

    //Create getter methods for your _players and _games keys. You do not need to create setter methods, because we don’t want anyone to change the values saved to these keys.
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    // Add a method addPlayer to your team object. This method should take in three parameters: firstName, lastName, and age. It should create a player object, and add them to the team‘s players array.
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };

        this.players.push(player);
    },
    // Add a similar method for recording game results called addGame that:
    // -takes in an opponent’s name,
    // -your team’s points,
    // -the opponent’s points,
    // -creates a game object,
    // -adds the game object to your team‘s games array.
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };

        this.games.push(game);
    },
}

//Below your team object, invoke your addPlayer method on the following players: Steph Curry Age 28,Lisa Leslie Age 44, and Bugs Bunny Age 76.Print out the team‘s players to check they were all properly added.
team.addPlayer('Steph', 'Cury', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);
console.log('<--------------->');

//Invoke your addGame method on three games and print the team‘s updated games array.
team.addGame('Sea Lions', 100, 50);
team.addGame('Wolves', 56, 90);
team.addGame('Tigers', 30, 45);

console.log(team.games);
console.log('<--------------->');
