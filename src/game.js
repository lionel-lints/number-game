const player1 = require('../src/player1.js');
const player2 = require('../src/player2.js');
const _ = require('lodash');

function Game() {
  this.player1RemainingPicks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  this.player2RemainingPicks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  this.player1Score = 0;
  this.player2Score = 0;
  this.player1Wins = 0;
  this.player2Wins = 0;
}

// Function that sets the play, the pick, and updates the model.
Game.prototype.makePlay = function () {
  const player1Object = {
    myArray: this.player1RemainingPicks,
    myScore: this.player1Score,
    opponentArray: this.player2RemainingPicks,
    opponentScore: this.player2Score,
  };
  const player2Object = {
    myArray: this.player2RemainingPicks,
    myScore: this.player2Score,
    opponentArray: this.player1RemainingPicks,
    opponentScore: this.player1Score,
  };
  const pick1 = player1(player1Object);
  const pick2 = player2(player2Object);

  _.pull(this.player1RemainingPicks, pick1);
  _.pull(this.player2RemainingPicks, pick2);

  this.comparePicks(pick1, pick2);
};

// Helper function that compares picks and adds scores.
Game.prototype.comparePicks = function (pick1, pick2) {
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
};

// Function that runs the plays until win, lose, or tie.
Game.prototype.runGame = function () {
  this.makePlay();
  if (this.player1Score >= 5) {
    this.player1Wins++;
    return;
  } else if (this.player2Score >= 5) {
    this.player2Wins++;
    return;
  } else if (this.player1RemainingPicks.length <= 0 || this.player2RemainingPicks.length <= 0) {
    return;
  }
  this.runGame();
};

// Function that runs the game 10000 times. It records the result and logs it.
Game.prototype.manyPlays = function () {
  let count = 10000;
  while (count !== 0) {
    this.runGame();
    this.player1RemainingPicks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.player2RemainingPicks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.player1Score = 0;
    this.player2Score = 0;
    count--;
  }
  console.log('Player 1 wins:  ', this.player1Wins);
  console.log('Player 2 wins:  ', this.player2Wins);
};

module.exports = Game;
