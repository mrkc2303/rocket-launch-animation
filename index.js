timeLeft = 10;

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerH4');
let int = null;

function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
		if(timeLeft == 2) {
			document.querySelector(".circleOverlay").classList.add("semiCircleAnimate");
			document.querySelector(".timerH4").classList.add("timerAnimate");
		}
	} else {
		document.getElementById("clock").style.display="none";
		document.querySelector(".smokenFire").style.display="block";
		document.querySelector(".rocketImg").classList.add("rocketImgAnimate");
		document.querySelector(".backImg").classList.add("backImgAnimate");
		document.querySelector("body").classList.add("backgroundAnimate");

		document.querySelector(".x1").style.display="none";
		document.querySelector(".x2").style.display="none";
		document.querySelector(".x3").style.display="none";
		document.querySelector(".x4").style.display="none";
		document.querySelector(".x5").style.display="none";

		document.querySelector(".y1").style.display="block";
		document.querySelector(".y1").classList.add("cloudAnimation");

		int = setInterval(displayTimer,10);
	}
};

setTimeout(countdown, 1000);

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 if(s == 5) {
	document.querySelector(".backImg").style.display="none";
 }

 timerRef.innerHTML = `T+ ${m} : ${s} : ${ms}`;
}