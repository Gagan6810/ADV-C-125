function preload(){
}

function setup(){
    canvas = createCanvas(500,450);
    canvas.position(550,150);
    video = createCapture(VIDEO);
    video.size(450,550)

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);

}

function modelLoaded(){
    console.log("PoseNet is Initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.y;
        difference = floor(leftWristX - rightWristX);   
    }
}

function draw(){
    background("aqua");
    textSize(difference);
    fill('black');
    text("Peter", 50,400);
}