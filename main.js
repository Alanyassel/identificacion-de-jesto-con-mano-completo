Webcam.set({
    width:360,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aA6O6cH45/model.json',modelLoaded);
function modelLoaded() {
console.log('Model loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "La primera prediccion es " + prediction_1
    speak_data_2 = "y la segunda prediccion es " + prediction_2
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
}

function modelLoaded() {
console.log('Model loaded!');
}

function check()
{
img = document.getElementById('captured_image');
classifier.classify(img, gotResult);
}

function gotResult(error, results) {
if(error) {
  console.log(error);
} else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    document.getElementById("result_emotion_name2").innerHTML = results[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    speak();
    if(results[0].label == "bien")
    {
            document.getElementById("update_emoji1").innerHTML = "&#128077";
    }
    if(results[0].label == "amor y paz")
    {
            document.getElementById("update_emoji1").innerHTML = "&#9996";
    }
    if(results[0].label == "perfecto")
    {
            document.getElementById("update_emoji1").innerHTML = "&#128076";
    }
    if(results[0].label == "puño")
    {
            document.getElementById("update_emoji1").innerHTML = "&#9994";
    }
    if(results[0].label == "mano abierta")
    {
            document.getElementById("update_emoji1").innerHTML = "&#9995";
    }
    if(results[1].label == "bien")
    {
            document.getElementById("update_emoji1").innerHTML = "&#128077";
    }
    if(results[1].label == "amor y paz")
    {
            document.getElementById("update_emoji1").innerHTML = "&#9996";
    }
    if(results[1].label == "perfecto")
    {
            document.getElementById("update_emoji1").innerHTML = "&#128076";
    }
    if(results[1].label == "puño")
    {
            document.getElementById("update_emoji1").innerHTML = "&#9994";
    }
    if(results[1].label == "mano abierta")
    {
            document.getElementById("update_emoji1").innerHTML = "&#9995";
    }
}
}
