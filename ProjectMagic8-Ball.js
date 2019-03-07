fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 5));
if (answer === 1) {
    text("Yes", 190, 200);
} else if (answer === 2) {
    text("Maybe", 182, 200);
} else if (answer === 3) {
    text("Unsure", 183, 200);
} else if (answer === 4) {
    text("Unlikely", 179, 200);
} else {
    text("No", 182, 200);
}
