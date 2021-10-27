x = 0;
y = 0;
screenwidth = 0;
screenheight = 0;
apple = "https://media.istockphoto.com/photos/red-apple-picture-id184276818?s=612x612";
speakdata = "";
to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    
    document.getElementById("status").innerHTML = "System is listening, please speak.";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "Speech has been recognized as: " + content;
    if(content == "apple"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing apple.";
        drawcircle = "set";
    }
}

function setup(){
    canvas = createCanvas(900, 600);
}

function draw(){
    if(drawcircle == "set"){
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Apple is drawn."
        drawapple = "";
}}