'use strict';
const expect = require("chai").expect;
const Game = require("../src/game.js");
const player1 = require('../src/player1.js');
const player2 = require('../src/player2.js');

describe("Game", function() {
  it("can be initialized", function() {
    let t = new Game(player1, player2);
    expect(t).to.exist;
  });

  describe('makePlay function', function(){
    it('takes two player functions', function (){
      let t = new Game();
      t.makePlay();
      console.log(t.player1Score, ' to ', t.player2Score);
      t.makePlay();
      console.log(t.player1Score, ' to ', t.player2Score);

      expect(typeof player1).to.equal('function');
      expect(typeof player2).to.equal('function');
    });

    it('should record the outcome of the play', function (){
      let t = new Game();
      t.manyPlays();
      expect(t.player1RemainingPicks).to.have.lengthOf(9);
      expect(t.player2RemainingPicks).to.have.lengthOf(9);
    });

    it('should keep track of the score', function (){
      let t = new Game(player1, player2);
    })
     it('should end when a player reaches 5 points', function (){
      let t = new Game(player1, player2);
    });

    it('should end in a tie when a player has no more picks', function (){
      let t = new Game(player1, player2);
    });

    it('should log the picks and the score of each play', function (){
      let t = new Game(player1, player2);
    });
  });
});

/*
 * notes for testing my game:
 * authentication of players:
 * each player function takes a single object with the following keys:
 *   myArray,
 *   myScore,
 *   opponentArray,
 *   opponentScore,
 * each player function returns a number from thier current array.
 * each player function returns a number between 1 and 10.
 *
 *
 */
