const game = {
    team1: 'Leaf of Legend',
    team2: 'Vanoranta',
    players: [
        [
            'Dillan Murray',
            'Anish Dominguez',
            'Carmen Terry',
            'Steven Acevedo',
            'David Aguilar',
            'Blaine Wagner',
            'Jago Jackson',
            'Allan Serrano',
            'Rafael Herrera',
            'Sian Roy',
            'Sachin Burton',
        ],
        [
            'Louis Morse',
            'Elliot Watts',
            'Ishaq Shepard',
            'Izaak Lynn',
            'Joel Hodge',
            'Matteo Grimes',
            'Pearl Crosby',
            'Magnus Duncan',
            'Cruz Mooney',
            'Gerald Bishop',
            'Dhruv Drake',
        ],
    ],
    score: '4:0',
    scored: [
        'Steven Acevedo',
        'Blaine Wagner',
        'Sachin Burton',
        'Sian Roy',
    ],
    date: 'Dec 12th, 2040',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
// //part1
//1
const [players1, players2] = game.players;
console.log(players1, players2);
//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3
const allPlayers = [...players1,...players2];
console.log(allPlayers);
//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
//5
const {odds: {team1,x: draw,team2}} = game;
console.log(team1,draw,team2);
//6
const printGoals = function(...players){
    console.log(`${players.length} goal were scored`);
}
printGoals(...game.scored);
//7
team1 < team2 && console.log('Team1 has more chance of winning');
team1 > team2 && console.log('Team2 has more chance of winning');


// //part2
//1
for ( const [number,player] of game.scored.entries()) console.log(`Goal  ${number+1}: ${player}`);
//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);
//3
for ( const [team,odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'hòa' : `thắng của ${game[team]}`;
    console.log(`Tỉ lệ ${teamStr}: ${odd}`);
}
// 
//  Tỉ lệ hòa of draw: 3.25
//  Tỉ lệ thắng của Borrussia Dortmund: 6.5
