var bodyW = 12;
draw= function() {
    background(235, 228, 228);
    ellipse(mouseX, mouseY, bodyW, bodyW);
    var bear =  mouseX + "," + mouseY; 
    text(bear, mouseX, mouseY);
    fill(255, 0, 0);
    rect(mouseX,mouseY,bodyW,bodyW);
    line(mouseX, mouseY, mouseX+34, mouseY-46);
    
textSize(40);
text("Fluffy Bears!", 10, 30);
textSize(15);
text("SO SOFT! DON'T GO TO SLEEP WITHOUT ONE!", 10, 87);
};
