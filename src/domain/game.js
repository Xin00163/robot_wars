'use strict';

function Game(arena) {
  this.arena = arena;
}

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

function execute(robot, actions){
  var action = actions[robot.direction];
  robot.x += action.x || 0;
  robot.y += action.y || 0;
  robot.direction = action.direction || robot.direction; 
}    

Game.prototype.moveRobot = function moveRobot(robot, moves) {
  for (var i=0; i<moves.length; i++) {
    var command = moveCommands[moves[i]]; 
    execute(robot, command); 
  }
  return robot;
};

module.exports = Game;