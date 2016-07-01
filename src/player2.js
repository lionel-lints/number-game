// Function that randomly selects a number.
function play(object) {
  return object.myArray[Math.floor(Math.random() * (object.myArray.length))];
}

module.exports = play;
