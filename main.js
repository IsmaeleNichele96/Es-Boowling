// Voglio creare un applicativo che simuli una sala da boowling e che mi permetta di effettuare una partita tra vari giocatori.

//  I metodi per poter realizzare questa app: 
// Calcolare un punteggio di ogni giocatore su 10 tiri e decretare il vincitore della sfida.


let boowling = {

    "players" : [
        {"name" : "Angelo" , "surname" : "Cardone",  "scores" : [1, 0, 10, 2,6,10,6,9,10,0]},
        {"name" : "Martina" , "surname" : "Codenotti",  "scores" : [1, 3, 10, 8,6,10,9,9,10,10]},
        {"name" : "Alfion" , "surname" : "Suta",  "scores" : [1, 10, 10, 2,6,10,7,9,10,0]}
    ],

    "setFinalScore" : function() {
        this.players.forEach( (player) => {
            player.finalScore =  player.scores.reduce( (acc, score) => acc + score);
        })
    },

    "setWinner" :function() {
        let winner = this.players[0];
        this.players.forEach( (player) => {
            if (player.finalScore > winner.finalScore) {
                winner = player;
            }
        })
    console.log(winner);
    } 


};

boowling.setFinalScore();
boowling.setWinner();


// let boowling = {
    
//     "players" : [
//         {"name" : "Angelo" , "surname" : "Cardone",  "scores" : []},
//         {"name" : "Martina" , "surname" : "Codenotti",  "scores" : []},
//         {"name" : "Alfion" , "surname" : "Suta",  "scores" : []}
//     ],
    
//     "setFinalScore" : function() {
//         this.players.forEach( (player) => {
//             player.finalScore =  player.scores.reduce( (acc, score) => acc + score);
//         })
//     },
    
//     "setWinner" :function() {
//         let winner = this.players[0];
//         this.players.forEach( (player) => {
//             if (player.finalScore > winner.finalScore) {
//                 winner = player;
//             }
//         })
        
//     },
    
    // La nostra funziona dovrà creare 10 numeri casuali da 10 a 0. questi saranno i punteggi dei nostri giocatori
    // Dobbiamo per ogni player applicare il ragionamento.
    // La formula del metodo matematico Math.floor(Math.random() * (10) + 0);
    // Pushare i nostri numeri randomici
    // Ciclo FOR per pushare i 10 numeri
    
    
//     "setScores" :function() {
//         this.players.forEach((player) => {
//             for (let i = 1; i <= 0; i++) {
//                 player.scores.push(Math.floor(Math.random() * (11) + 0))
                
//             }
//         })
        
//     }
    
// };

// console.log(boowling.players);
// boowling.setScores();
// boowling.setFinalScore();
// boowling.setWinner();