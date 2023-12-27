function preload() {


}
function setup() {
    Canvas = createCanvas(500, 400)
    Canvas.position(500,200)
    Video = createCapture(VIDEO)
    Video.hide();
}
function draw() {
    stroke(168, 10, 10);
    strokeWeight(4)
    fill(255, 204, 100);


    rect(20, 20,465,350, 20);
    image(Video, 100,65, 300, 250);
    fill(255, 204, 0);
}
function snap() {
    save().Video;
}