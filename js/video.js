var video = document.querySelector(".video");;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	
});

 document.querySelector("#play").addEventListener("click", function() {
	 console.log("Play Video");
	 video.play();
	 document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
 });
 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*1.05;
	console.log("New Speed is " + video.playbackRate);
});
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate/1.05;
	console.log("New Speed is " + video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original Location " + video.currentTime);
	video.currentTime += 15;
	if(video.currentTime>67.40){
		console.log("Going back to beginning");
		video.currentTime = 0;
	}
	console.log("New Location " + video.currentTime);
});
document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	if(video.muted){
		document.querySelector("#mute").innerHTML = "Unmute"
	} else {
		document.querySelector("#mute").innerHTML = "Mute"
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log(document.querySelector("#slider").value);
	video.volume = document.querySelector("#slider").value/100;
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
});
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
})
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
})
