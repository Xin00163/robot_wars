'use strict';

var moveForwardActions = {'N': { y: 1 },
                 'S': { y: -1 },
                 'E': { x: 1 },
                 'W': { x: -1 }};

var rotateRightActions = {'N': { direction: 'E' }, 
                 'W': { direction: 'N' }, 
                 'S': { direction: 'W' }, 
                 'E':  { direction: 'S'}};
                 
var rotateLeftActions = {'N':  { direction: 'W' },
                 'W':  { direction: 'S'}, 
                 'S':  { direction: 'E'}, 
                 'E': { direction: 'N'}};

var moveCommands = {
  'L': rotateLeftActions,
  'R': rotateRightActions,
  'M': moveForwardActions
};

function Game(arena) {
  this._arena = arena;
}

function isValidMove(newPositon, max) {
  return newPositon >=0 && newPositon <= max;
}

Game.prototype._execute = function (robot, actions) {
  var arena = this._arena;
  var action = actions[robot.direction];
  var newX = robot.x + (action.x || 0);
  var newY = robot.y + (action.y || 0);

  if (isValidMove(newX, arena.x)) robot.x = newX;
  if (isValidMove(newY, arena.y)) robot.y = newY;
  robot.direction = action.direction || robot.direction;
};

Game.prototype.moveRobot = function (robot, moves) {
  moves.forEach(function (move) {
    var command = moveCommands[move];
    this._execute(robot, command);
  }.bind(this));
  return robot;
};

module.exports = Game;