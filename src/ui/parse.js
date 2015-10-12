'use strict';

module.exports = {
    
    ParseArena: function (line) {
        var coordinates = line.split(' ');
        return {x: parseInt(coordinates[0]), y: parseInt(coordinates[1])};
    },
    
    ParseRobot: function (line) {
        var robot = line.split(' ');
        console.log(JSON.stringify(robot));
        return {x: parseInt(robot[0]), y: parseInt(robot[1]), direction: robot[2].toUpperCase()};
    },

    ParseMoves: function (line) {
        return line.toUpperCase().split('');
    }
    
};
