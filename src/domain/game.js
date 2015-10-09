'use strict';

// My module
function Game(arena) {
  this.arena = arena;
}

//robot - x,y,direction - initial position
//moves - [L,F,R,F,F] - set of actions to be taken
//returns updated robot position
Game.prototype.moveRobot = function moveRobot(robot, moves) {
  return robot;
};

module.exports = Game;

//TODO:
//1. Read about approaches to classses in nodejs http://book.mixu.net/node/ch6.html
