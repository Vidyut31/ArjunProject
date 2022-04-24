var SpeechRecognition = window.webkitSpeechRecognition;

var content="";
var recognition=new SpeechRecognition();
Webcam.set({
    width:500, 
    height:400,
    image_format:"jpg",
    jpg_quality:90
});
camera= document.getElementById("camera");
Webcam.attach(camera)

function start(){
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    if(content=="selfie"){
        speak();
    }
}
function speak() {
    var synth = window.speechSynthesis;
    
    var speak_data = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


    setTimeout(function () {
        img_id = "selfie1";
        take_snapshot();
        speak_data = "Taking your selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }, 5000);


    setTimeout(function () {
        img_id = "selfie2";
        take_snapshot();
        speak_data = "Taking your next selfie in 10 seconds";
        var UtterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }, 10000);

    setTimeout(function () {
        img_id = "selfie3";
        take_snapshot();
    }, 15000);

}

function take_snapshot(){
    console.log(img_id);

    Webcam.snap(function (data_uri) {
        console.log(data_uri)
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie3"src="'+data_uri+'"/>';
        }
});
}