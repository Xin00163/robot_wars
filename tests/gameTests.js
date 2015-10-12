'use strict';

var game = require("../src/domain/game.js");
var assert = require("assert");
var data_driven = require('data-driven');

describe('moveRobot', function() {
  describe('when executing set of moves', function() {
    data_driven([{moves: [], direction: 'W', expectedX: 10, expectedY:10},
                 {moves: ['M'], direction: 'W', expectedX: 9, expectedY:10},
                 {moves: ['M'], direction: 'E', expectedX: 11, expectedY:10},
                 {moves: ['M'], direction: 'S', expectedX: 10, expectedY: 9},
                 {moves: ['M'], direction: 'N', expectedX: 10, expectedY: 11}] , function() {
      it('should move {direction} facing robot for {moves} on ({expectedX}, {expectedY})', function (ctx) {
        var subject = new game();
        var robot = {x: 10, y: 10, direction: ctx.direction};
        
        var outcome = subject.moveRobot(robot, ctx.moves);
    
        assert.equal(outcome.x, ctx.expectedX);
        assert.equal(outcome.y, ctx.expectedY);
        assert.equal(outcome.direction, robot.direction);  
      });
    });
  });
});