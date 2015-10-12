'use strict';

var game = require("../src/domain/game.js");
var assert = require("assert");
var data_driven = require('data-driven');

describe('moveRobot', function() {
  describe('when executing set of moves', function() {
    data_driven([{moves: [], direction: 'W', expectedX: 10, expectedY:10, expectedDirection: 'W'},
                 {moves: ['M'], direction: 'W', expectedX: 9, expectedY:10, expectedDirection: 'W'},
                 {moves: ['M'], direction: 'E', expectedX: 11, expectedY:10, expectedDirection: 'E'},
                 {moves: ['M'], direction: 'S', expectedX: 10, expectedY: 9, expectedDirection: 'S'},
                 {moves: ['M'], direction: 'N', expectedX: 10, expectedY: 11, expectedDirection: 'N'},
                 {moves: ['L'], direction: 'N', expectedX: 10, expectedY: 10, expectedDirection: 'W'},
                 {moves: ['L'], direction: 'S', expectedX: 10, expectedY: 10, expectedDirection: 'E'},
                 {moves: ['R'], direction: 'N', expectedX: 10, expectedY: 10, expectedDirection: 'E'},
                 {moves: ['R'], direction: 'S', expectedX: 10, expectedY: 10, expectedDirection: 'W'},
                 {moves: ['R','R'], direction: 'S', expectedX: 10, expectedY: 10, expectedDirection: 'N'},
                 {moves: ['L','M', 'M', 'M', 'R'], direction: 'S', expectedX: 13, expectedY: 10, expectedDirection: 'S'}] , function() {
      it('should move {direction} facing robot for [{moves}] to ({expectedX}, {expectedY}, {expectedDirection})', function (ctx) {
        var subject = new game();
        var robot = {x: 10, y: 10, direction: ctx.direction};
        
        var outcome = subject.moveRobot(robot, ctx.moves);
    
        assert.equal(outcome.x, ctx.expectedX);
        assert.equal(outcome.y, ctx.expectedY);
        assert.equal(outcome.direction, ctx.expectedDirection);
      });
    });
  });
});