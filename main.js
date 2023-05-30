song = "";
song_2 = "";

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    song = loadSound("Harry-Potter-Theme.mp3");
    song_2 = loadSound("Gigachad.mp3");
}

function draw(){
    image(video, 0, 0, 600, 500);
}