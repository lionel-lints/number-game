const expect = require("chai").expect;
var Game = require("../src/game.js");
var player1 = require('../src/player1.js');
var player2 = require('../src/player2.js');

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


describe("Game", function() {
  it("can be initialized", function() {
    var t = new Game(player1, player2);
    expect(t).to.exist;
  });

  describe('makePlay function', function(){
    it('takes two player functions', function (){
      var t = new Game();
      t.makePlay(player1, player2);
      expect(typeof player1).to.equal('function');
      expect(typeof player2).to.equal('function');
    });

    it('should record the outcome of the play', function (){
      var t = new Game(player1, player2);

    });

    it('should keep track of the score', function (){
      var t = new Game(player1, player2);
    });

     it('should end when a player reaches 5 points', function (){
      var t = new Game(player1, player2);
    });

    it('should end in a tie when a player has no more picks', function (){
      var t = new Game(player1, player2);
    });

    it('should log the picks and the score of each play', function (){
      var t = new Game(player1, player2);
    });
  });
});
