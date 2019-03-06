var xPositions = [200, 100];
var yPositions = [0, 100];

draw = function() {
    background(204, 247, 255);
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(67, 0, 212);
        if(yPositions[i] > 400) {
            yPositions[i] = 0;
        }
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += random(1,10);
    }
};

var mouseClicked = function() {
    xPositions.push(random(0,400));
    yPositions.push(random(0,400));
};
