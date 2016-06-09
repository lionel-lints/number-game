'use strict';

var player1 = require('../src/player1.js');
var player2 = require('../src/player2.js');
var _ = require('lodash');

function Game (){
  this.player1RemainingPicks = [1,2,3,4,5,6,7,8,9,10];
  this.player2RemainingPicks = [1,2,3,4,5,6,7,8,9,10];
  this.player1Score = 0;
  this.player2Score = 0;
  this.player1Wins = 0;
  this.player2Wins = 0;
}

//function that sets the play, the pick, and updates the model.
Game.prototype.makePlay = function(){
  var player1Object = {
    myArray: this.player1RemainingPicks,
    myScore: this.player1Score,
    opponentArray: this.player2RemainingPicks,
    opponentScore: this.player2Score
  };
  var player2Object = {
    myArray: this.player2RemainingPicks,
    myScore: this.player2Score,
    opponentArray: this.player1RemainingPicks,
    opponentScore: this.player1Score
  };
  var pick1 = player1(player1Object);
  var pick2 = player2(player2Object);

  _.pull(this.player1RemainingPicks, pick1);
  _.pull(this.player2RemainingPicks, pick2);

  this.comparePicks(pick1, pick2);
}

//helper function that compares picks and adds scores.
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

//function that runs the plays until win lose or tie.
Game.prototype.runGame = function (){
  this.makePlay();
  if (this.player1Score >= 5) {
    console.log('player 1 wins!');
    this.player1Wins++;
    return;
  } else if (this.player2Score >= 5) {
    console.log('player 2 wins!');
    this.player2Wins++;
    return;
  } else if ( this.player1RemainingPicks.length <= 0 || this.player2RemainingPicks.length <= 0 ) {
    console.log('no more picks, tie!');
    return;
  } else {
    this.runGame();
  }
}

//function that runs the game 10000 times. it records the result and outputs it at the end.
Game.prototype.manyPlays = function () {
  var count = 10000;
  while(count !== 0){
    this.runGame();
    console.log(count);
    this.player1RemainingPicks = [1,2,3,4,5,6,7,8,9,10];
    this.player2RemainingPicks = [1,2,3,4,5,6,7,8,9,10];
    this.player1Score = 0;
    this.player2Score = 0;
    count--;
  }
  console.log(this.player1Wins);
  console.log(this.player2Wins);
}

module.exports = Game;
