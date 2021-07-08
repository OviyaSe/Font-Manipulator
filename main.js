leftWristX=0;
rightWristX=0;
difference=0;

function setup() {
     video = createCapture(VIDEO); 
     video.size(550, 500); 
     canvas = createCanvas(550, 550); 
     canvas.position(560,150); 
     poseNet = ml5.poseNet(video, modelLoaded); 
     poseNet.on('pose', gotPoses); 
    }

function modelLoaded(){
    console.log("PoseNet is Intitialized!");
}

function draw(){
    background("#6788e0");
    stroke('#ffcc00');
    text("Oviya",50,400);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=leftWristX-rightWristX;
        console.log("leftWristX= "+leftWristX+" rightWristX= "+rightWristX+" difference= "+difference);
    }
}