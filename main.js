var NoseX = '';
var NoseY = '';
var RightWristX = '';
var RightWristY = '';
var LeftWristX = '';
var LeftWristY = '';
var difference = '';


function preload() {

}

function setup() {
canvas = createCanvas(550, 500);
canvas.position(900, 100);
video = createCapture(VIDEO);
video.position(50, 50);
video.size(550, 500);


poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!')
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);

        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        RightWristX = results[0].pose.rightWrist.x;
        RightWristY = results[0].pose.rightWrist.y;
        LeftWristX = results[0].pose.leftWrist.x;
        LeftWristY = results[0].pose.leftWrist.y;

        console.log("Nose X is = " + NoseX);
        console.log("Nose Y is = " + NoseY);
        console.log("Right Wrist X is = " + RightWristX);
        console.log("Right Wrist Y is = " + RightWristY);
        console.log("Left Wrist X is = " + LeftWristX);
        console.log("Left Wrist Y is = " + LeftWristY);
        difference = floor(LeftWristX = RightWristX);
        
        console.log("LeftWristX = " + LeftWristX + "RightWristX = " + RightWristX + "difference = " + difference);
    }
    }


function draw(){
background('#ADD8E6');

textSize(difference);
fill('#FF0000');
text('Rijuta', NoseX, NoseY, difference );

}