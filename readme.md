
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
