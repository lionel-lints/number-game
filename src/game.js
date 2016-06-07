'use strict';

var player1 = require('../src/player1.js');
var player2 = require('../src/player2.js');

function Game (){
  this.player1RemainingPicks = [1,2,3,4,5,6,7,8,9,10];
  this.player2RemainingPicks = [1,2,3,4,5,6,7,8,9,10];
  this.player1Score = 0;
  this.player2Score = 0;
}

Game.prototype.makePlay = function(){
  /* This function should accept and run both player functions
  * and compute the outcome. Additionally, it should
  * update the results of the player scores and the remaining picks. */
  let player1Object = {
    myArray: this.player1RemainingPicks,
    myScore: this.player1Score,
    opponentArray: this.player2RemainingPicks,
    oppoenetScore: this.player2Score
  };
  let player2Object = {
    myArray: this.player2RemainingPicks,
    myScore: this.player2Score,
    opponentArray: this.player1RemainingPicks,
    oppoenetScore: this.player1Score
  };
  var pick1 = player1(player1Object);
  var pick2 = player2(player2Object);
  console.log("######## 1 ##########", pick1);
  console.log("$$$$$$$$ 2 $$$$$$$$$$", pick2);
  
}




module.exports = Game;
