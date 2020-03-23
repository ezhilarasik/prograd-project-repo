i = 0;
var queen = new Object();

queen.direction = "S";
queen.position = { x: 4, y: 0 };
queen.whereabouts = [1];
queen.positionLog = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],

    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],

    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],

    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],

    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],

    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],

    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],

    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]];

queen.updatePosition = function (x, y) {
    // update whereabouts
    console.log(x, y);
    queen.whereabouts[i] = queen.positionLog[y][x];
    //  console.log(queen.positionLog[x][y]);
    i++;
}


queen.jumpMoveForward = function (x, y) {
    if (x < 0 || y < 0 || x > 8 || y > 8) {
        console.log("Invalid Move");
        //throw new Error;

    }
    else {
        queen.position.x = x;
        queen.position.y = y;
        queen.updatePosition(queen.position.x, queen.position.y);
    }
    // movement based on direction and position property
    //call update position after every movement
}

queen.changeDirection = function (direction) {
    console.log(direction);
    if (direction.length == 2) {
        var d = direction.substr(0, 1);
        var moves = direction.substr(1);
        console.log(d, moves);
    }
    else {
        d = direction.substr(0, 2);
        moves = direction.substr(2);
    }

    switch (d) {
        case "N":
            queen.jumpMoveForward(queen.position.x, queen.position.y - moves);
            break;
        case "S":
            queen.jumpMoveForward((queen.position.x), parseInt(queen.position.y + moves));
            break;
        case "E":
            queen.jumpMoveForward(parseInt(queen.position.x + moves), queen.position.y);
            break;
        case "W":
            queen.jumpMoveForward(queen.position.x - moves, queen.position.y);
            break;
        case "NE":
            queen.jumpMoveForward(queen.position.x - moves, queen.position.y - moves);
            break;
        case "NW":
            queen.jumpMoveForward(parseInt(queen.position.x) + moves, queen.position.y - moves);
            break;
        case "SE":
            queen.jumpMoveForward(queen.position.x - moves, parseInt(queen.position.y + moves));
            break;
        case "SW":
            queen.jumpMoveForward(parseInt(queen.position.x + moves), parseInt(queen.position.y + moves));
            break;
    }
    queen.moveForward = function () {
        //movement based on direction and position attributes
        //after every movement 
        //call update position
    }


}

function first() {
    var str = prompt("Enter the moves of Queen (for Example: N3 S1");
    var s = str.split(" ");
    var j = 0;
    while (j < s.length) {
        console.log(s[j]);
        queen.changeDirection(s[j]);
        j++;
    }

    document.getElementById("demo").innerHTML = queen.whereabouts;
}
