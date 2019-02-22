background(89, 216, 255);

draw= function() {
var xPos = random(0,400);
var yPos = random(0,400);
var col1 = random(0,225);
var col2 = random(0,225);
var col3 = random(0,225);
var centerX = xPos;
var centerY = yPos;
var bodyLength = random(0,148);
var bodyHeight = random(0,74);
var bodyColor = color(col1, col2, col3);

noStroke();

// fish 1
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);

};
