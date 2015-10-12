'use strict';

// My module
function Game(arena) {
  this.arena = arena;
}

function moveForward(robot) {
  var actions = {'N': { y: 1 },
                 'S': { y: -1 },
                 'E': { x: 1 },
                 'W': { x: -1 }};
  var action = actions[robot.direction];
  robot.x += action.x || 0;
  robot.y += action.y || 0;
}

Game.prototype.moveRobot = function moveRobot(robot, moves) {
  if (moves.length > 0) {
    moveForward(robot);
  }
  return robot;
};

module.exports = Game;

//TODO:
//1. Read about approaches to classses in nodejs http://book.mixu.net/node/ch6.html
