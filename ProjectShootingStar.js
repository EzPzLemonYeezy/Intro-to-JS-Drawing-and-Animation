var xPos = 100;
var yPos = 200;
var xPos2 = 300;
var yPos2 = 75;

draw = function() {
    background(29, 40, 115);
    
    xPos +=2;
    yPos +=1;
    
    xPos2 -=2;
    yPos2 +=1;
    
    fill(176, 51, 51);
    ellipse(50, 250, 10, 10); // stars
    ellipse(180, 300, 10, 10);
    ellipse(258, 235, 10, 10);
    rect(333, 243, 10, 10);
    ellipse(327, 105, 10, 10);
    rect(238, 143, 10, 10);
    ellipse(150, 172, 10, 10);
    ellipse(84, 62, 10, 10);
    ellipse(359, 41, 10, 10);
    ellipse(109, 121, 10, 10);
    
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10); // shooting star left
    ellipse(xPos2, yPos2, 10, 10);
    
    fill(89, 242, 120);
    rect(-2, 325, 404, 75); // ground
};
