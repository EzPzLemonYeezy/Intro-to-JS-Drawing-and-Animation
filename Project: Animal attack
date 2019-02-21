var hatXpos = 200;
var hatYpos = 218;
var bodyX = 200;
var bodyY = 220;
var bodyW = 118;
var bodyH = bodyW/2;

draw = function() {
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 106); // body
    
    hatXpos ++;
    hatYpos --;
    
    ellipse(bodyX, bodyY-70, bodyH, 47); // face
    
    
    fill(0, 0, 0);
    ellipse(hatXpos, hatYpos-92, bodyH*8/5, 47*4/12); // top hat 
    fill(0, 0, 0);
    rect(hatXpos-26, hatYpos-137, bodyW-69, bodyH+-21);
    fill(255, 255, 255);
    rect(hatXpos-27, hatYpos-107, bodyW-67, bodyH+-52);
    
    line(bodyX-54, bodyY-23, bodyW-39, bodyH+104);
    line(bodyX+54, bodyY-22, bodyW+204, bodyH+104);
};
