'use strict';

// My module
function Game(arena) {
  this.arena = arena;
}

//robot - x,y,direction - initial position
//moves - [L,F,R,F,F] - set of actions to be taken
//returns updated robot position
Game.prototype.moveRobot = function moveRobot(robot, moves) {
  var direction = robot.direction;
  if (moves.length > 0) {
    if (direction === 'N') {
      robot.y += 1; 
    } else if (direction === 'S') {
      robot.y -= 1; 
    } else if (direction === 'E') {
      robot.x += 1; 
    } else if (direction === 'W') {
      robot.x -= 1; 
    }
  }
  return robot;
};

module.exports = Game;

//TODO:
//1. Read about approaches to classses in nodejs http://book.mixu.net/node/ch6.html
