objectDetector2= "";
Status= "";
objects1= [];
pic= "";
img2= "";
img3= "";
img4= "";
img5= "";

function preload(){
    pic= loadImage('living.png');
}

function setup(){   
    canvas= createCanvas(640,420);
    canvas.center();

    objectDetector2= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";
}

function draw(){
    image(pic, 0, 0, 640, 420);
    console.log(objects1);
    if(Status != ""){
        objectDetector2.detect(pic, gotResult);
        for(i= 0; i< objects1.length; i++){
            document.getElementById("status").innerHTML= "Status: Objects Detected";
            fill('#FF0000');
            percent= floor(objects1[i].confidence * 100);
            text(objects1[i].label + " " + percent + "%", objects1[i].x+15, objects1[i].y+15);
            noFill();
            stroke('#FF0000');
            rect(objects1[i].x, objects1[i].y, objects1[i].width, objects1[i].height);
            document.getElementById("objects").innerHTML= "There are 4 big objects in the image and the cocossd model has detected " + objects1.length;
            console.log("Drawn!");
        }
    }
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status= true;
  //  objectDetector.detect(img1, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects1= results;
}