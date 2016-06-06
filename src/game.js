'use strict';

const player1 = require('../src/player1.js');
const player2 = require('../src/player2.js');

function Game (){
  this.player1RemainingPicks = [1,2,3,4,5,6,7,8,9,10];
  this.player2RemainingPicks = [1,2,3,4,5,6,7,8,9,10];
  this.player1Score = 0;
  this.player2Score = 0;
}

Game.prototype.makePlay = function(player1Func, player2Func){
  /* This function should accept and run both player functions
  * and compute the outcome. Additionally, it should
  * update the results of the player scores and the remaining picks. */

  let player1Play = player1Func({

  });
  return 3;
};






module.exports = Game;
