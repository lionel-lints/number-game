## The LEGENDARY JavaScript number picking game

  This test suite and game runner are designed to let you build and save a number picking algorithm to outplay your cohort. It is designed to be fun and challenging. The algorithms that are built are piped into the game and are run against one another, the winner of each competition will be the player or team which wins the most games against the opposing team.

## The Rules

  1. The goal is to build a number picking algorithm that is the first to win 5 points.

  1. A player who chooses a number that is lower than their opponents choice by two or more wins 1 point.

  1. A player who picks a number which is one higher than their opponents choice wins 2 points.

  1. Players pick numbers from 1 to 10, but may only pick each number once.

  1. If both players pick the same number, no points are awarded, however that number may no longer be selected by either player.


  notes for testing my game:

  1 a game can be initialized.
  2 a game takes 2 player functions.
  3 a game runs each player function and records the result.
  4 a game keeps track of the score.
  5 a game ends when one of the players gets 5 points.
  6 a game ends in a tie when no array items are available to pick from.
  7 a game logs the picks and the scores of each play.

  authentication of players:
  each player function takes a single object with the following keys:
    myArray,
    myScore,
    opponentArray,
    opponentScore,
  each player function returns a number from thier current array.
  each player function returns a number between 1 and 10.
