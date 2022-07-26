function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/pA87G7bf4/model.json", modelReady)
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        random_r = Math.floor(Math.random() * 255) + 1
        random_g = Math.floor(Math.random() * 255) + 1
        random_b = Math.floor(Math.random() * 255) + 1
        document.getElementById("result_label").innerHTML = "I Can Hear " + results[0].label
        document.getElementById("result_label").style.color = "rgb(" + random_r + "," + random_g+","+random_b+")"
        document.getElementById("result_confidence").innerHTML = "Accruacy-" + (results[0].confidence*100).toFixed(2)+"%"
        document.getElementById("result_confidence").style.color = "rgb(" + random_r + "," + random_g+","+random_b+")"
        img1=document.getElementById("animal")
        if(results[0].label=="Meow"){
            img1.src="Dancing Dog 1.gif"

        }else  if(results[0].label=="Mooo"){
            img1.src="Dancing Dog 2.gif"
            
        }else  if(results[0].label=="Woof"){
            img1.src="Dancing Dog 3.gif"
        }
        
        else{
            img1.src="Dancing Dog 4.gif"
        }
    }
}