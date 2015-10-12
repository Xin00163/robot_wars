'use strict';

var readline = require('readline');
var game = require("./domain/game.js");
var count = 0;
var robots = [];
var domain;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.prompt();

rl.on('line', function (cmd) {
    count += 1;
    if (count === 1) {
        domain = new game(ParseArena(cmd));
        return;
    }
    
    if (cmd === '') {
        console.log(JSON.stringify(robots));
         var results = robots.map(function(robot) {return domain.moveRobot(robot, robot.moves);});
         results.forEach(PrintResult);
         rl.close();
         return;
    }
        
    if (count % 2 === 0) {
        robots.push(ParseRobot(cmd));
    } else {
        robots[robots.length-1].moves = ParseMoves(cmd);
    }
});

function ParseArena(line) {
    var coordinates = line.split(' ');
    return {x: parseInt(coordinates[0]), y: parseInt(coordinates[1])};
}

function ParseRobot(line) {
    var robot = line.split(' ');
    console.log(JSON.stringify(robot));
    return {x: parseInt(robot[0]), y: parseInt(robot[1]), direction: robot[2].toUpperCase()};
}

function ParseMoves(line) {
    return line.toUpperCase().split('');
}

function PrintResult(result) {
    console.log(JSON.stringify(result));
}

//1. Move Out parsing functions to UI
//2. Figure out how to mock readline 