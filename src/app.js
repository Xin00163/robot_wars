'use strict';

var readline = require('readline');
var game = require("./domain/game.js");
var parse = require("./ui/parse.js");
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
        domain = new game(parse.ParseArena(cmd));
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
        robots.push(parse.ParseRobot(cmd));
    } else {
        robots[robots.length-1].moves = parse.ParseMoves(cmd);
    }
});

function PrintResult(result) {
    console.log(JSON.stringify(result));
}

//2. Figure out how to mock readline 