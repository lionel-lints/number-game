const expect = require("chai").expect;
var Game = require("../src/game.js");
var player1 = require('../src/player1.js');
var player2 = require('../src/player2.js');

/*
 * notes for testing my game:
 *
 * 1 a game can be initialized.
 * 2 a game takes 2 player functions.
 * 3 a game runs each player function and records the result.
 * 4 a game keeps track of the score.
 * 5 a game ends when one of the players gets 5 points.
 * 6 a game ends in a tie when no array items are available to pick from.
 * 7 a game logs the picks and the scores of each play.
 *
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
    console.log(t);
    expect(t).to.exist;
  });

  //describe("with a game", function(){
    //var t;

    //beforeEach(function() {
      //t = new Game();
    //});

    //describe(".learn", function(){
      //it("learns a word character by character", function(){
        //t.learn("be");
        //var b = t.characters.b;
        //expect(b).to.exist;
        //expect(b.isWord).to.not.exist;
        //var e = b.characters.e;
        //expect(e).to.exist;
        //expect(e.isWord).to.exist;
        //expect(e.characters).to.deep.equal({});
      //});

      //it("learns an extension", function(){
        //t.learn("be");
        //t.learn("begin");
        //var e = t.characters.b.characters.e;
        //expect(e.isWord).to.exist;
        //var n = e.characters.g.characters.i.characters.n;
        //expect(n.isWord).to.exist;
      //});

      //it("learns a prefix", function(){
        //t.learn("begin");
        //t.learn("be");
        //var e = t.characters.b.characters.e;
        //expect(e.isWord).to.exist;
        //var n = e.characters.g.characters.i.characters.n;
        //expect(n.isWord).to.exist;
      //});
    //});

    //describe(".find", function(){
      //it("returns to.existy for a nonexistent string", function(){
        //expect(t.find("nope")).to.not.exist;
      //});

      //it("returns the right node for a prefix", function(){
        //t.learn("begin");
        //expect(t.find("b")).to.deep.equal(t.characters.b);
      //});

      //it("returns the last node for a prefix", function(){
        //// Thanks to Nikki Anderson and Stephanie Daffara
        //t.learn("begin");
        //t.learn("began");
        //var ending = t.characters.b.characters.e.characters.g;
        //expect(t.find("beg")).to.deep.equal(ending);
      //});
    //});

    //describe(".getWords", function(){
      //it("gets a child word", function(){
        //t.learn("beast");
        //expect(t.getWords()).to.deep.equal(["beast"]);
      //});

      //it("gets multiple child words", function(){
        //t.learn("begin");
        //t.learn("beginner");
        //expect(t.getWords()
          //).to.deep.equal(["begin", "beginner"]);
      //});

      //it("gets its own node if it is a word", function(){
        //t.learn("a");
        //expect(t.characters.a.getWords()).to.deep.equal([""]);
      //});

      //it("returns an empty array if there are no words", function(){
        //expect(t.getWords()).to.deep.equal([]);
      //});

      //it("returns multiple children on different branches", function(){
        //// Thanks to Stu Stein.
        //t.learn("begin");
        //t.learn("best");
        //expect(t.getWords()
          //).to.deep.equal(["begin", "best"]);
      //});
    //});

    //describe(".autoComplete", function(){
      //beforeEach(function(){
        //t.learn("be");
        //t.learn("begin");
        //t.learn("beginner");
        //t.learn("beast");
      //});

      //it("can recover multiple completions for a prefix", function(){
        //expect(t.autoComplete("beg")).to.deep.equal(["begin", "beginner"]);
      //});

      //it("can recover a single completion", function(){
        //expect(t.autoComplete("bea")).to.deep.equal(["beast"]);
      //});

      //it("can recover a completion for the whole word", function(){
        //expect(t.autoComplete("beast")).to.deep.equal(["beast"]);
      //});

      //it("can recover many completions", function(){
        //expect(t.autoComplete("be")).to.deep.equal(["be", "begin", "beginner", "beast"]);
      //});
      //it("returns an empty array when there are no completions", function(){
        //expect(t.autoComplete("a")).to.deep.equal([]);
      //});
    //});

  //});


});
