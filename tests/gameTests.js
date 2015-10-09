'use strict';

var game = require("../src/domain/game.js");
var assert = require("assert");

describe('moveRobot', function() {
  it('should return robot', function () {
    var subject = new game();
    var robot = {x: 10, y: 10, direction: 'N'};
    var moves = [];
    
    var outcome = subject.moveRobot(robot, moves);
    
    assert.equal(outcome.x, robot.x);
    assert.equal(outcome.y, robot.y);
    assert.equal(outcome.direction, robot.direction);
  });
});