const player1 = require('../src/player1.js');
const player2 = require('../src/player2.js');

function Game ( player1, player2){
  this.player1RemainingPicks = [1,2,3,4,5,6,7,8,9,10];
  this.player2RemainingPicks = [1,2,3,4,5,6,7,8,9,10];
  this.player1Score = 0;
  this.player2Score = 0;
  this.play1 = player1();
  this.play2 = player2();
}

Game.prototype.learn = function(word, index){
  // This function should add the given word,
  // starting from the given index,
  // to this Game.

  // It will be recursive.  It will tell
  // the correct child of this Game to learn the word
  // starting from a later index.

  // Consider what the learn function should do
  // when it reaches the end of the word?
  // A word does not necessarily end at a leaf.
  // You must mark nodes which are the ends of words,
  // so that the words can be reconstructed later.

};

Game.prototype.getWords = function(words, currentWord){
  // This function will return all the words which are
  // contained in this Game.
  // it will use currentWord as a prefix,
  // since a Game doesn't know about its parents.

};

Game.prototype.find = function(word, index){
  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.

  // Be sure to consider what happens if the word is not in this Game.

};

Game.prototype.autoComplete = function(prefix){
  // This function will return all completions
  // for a given prefix.
  // It should use find and getWords.

};

module.exports = Game;
