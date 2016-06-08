'use strict';

var player1 = require('../src/player1.js');
var player2 = require('../src/player2.js');
var _ = require('lodash');

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
  var player1Object = {
    myArray: this.player1RemainingPicks,
    myScore: this.player1Score,
    opponentArray: this.player2RemainingPicks,
    oppoenetScore: this.player2Score
  };
  var player2Object = {
    myArray: this.player2RemainingPicks,
    myScore: this.player2Score,
    opponentArray: this.player1RemainingPicks,
    oppoenetScore: this.player1Score
  };
  var pick1 = player1(player1Object);
  var pick2 = player2(player2Object);
  _.pull(this.player1RemainingPicks, pick1);
  _.pull(this.player2RemainingPicks, pick2);

  //game evaluates the 2 picks and determines which player scored.
  // invoke and update the game
  this.comparePicks(pick1, pick2);
}

Game.prototype.comparePicks = function (pick1, pick2){
  if (pick2 === pick1) {
    return;
  } else if (pick2 === pick1 - 1) {
    this.player1Score += 2;
  } else if (pick1 === pick2 - 1) {
    this.player2Score += 2;
  } else if (pick2 < pick1 - 1) {
    this.player2Score += 1;
  } else if (pick1 < pick2 - 1) {
    this.player1Score += 1;
  }
}

module.exports = Game;
