'use strict'

function play (object){
  let index = Math.floor(Math.random() * (object.myArray.length));
  function pick (index) {
    return object.myArray[index];
  };
  return pick(index);
}

module.exports = play;
