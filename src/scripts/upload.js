const uploadVideo__url = document.querySelector("#uploadVideo__url");
const uploadVideo__video__src = document.querySelector("#uploadVideo__src");

const titleLengthBox = document.querySelector("#titleLength");
const titleLength = document.querySelector("#titleVideo");

const uploadVideo__avatar = document.getElementById("uploadVideo__avatar");
const uploadVideo__channel__name = document.getElementById("uploadVideo__channel__name");

let videoUrl = "";

let uploadedVideoTitle = "";
let uploadedVideoTime = "";
let uploadedVideoSrc = "";

window.setInterval(() => {
	videoUrl = uploadVideo__url.value;
	titleLengthBox.innerText = `${titleLength.value.length}/30`;
	uploadVideo__avatar.src = yourAvatar;
	uploadVideo__channel__name.innerText = myChannelName;
}, 100);

document.addEventListener("keydown", (e) => {
	if (e.code === "Enter") {
		if (videoUrl != "") {
			uploadVideo__video__src.src = videoUrl;
		}
	}
});

const hidden__video = document.getElementById("hidden__video");

const uploadedVideo__title = document.getElementById("uploadedVideo__title");
const uploadedVideo__views = document.getElementById('uploadedVideo__views')
const uploadedVideo__avatar = document.getElementById("uploadedVideo__avatar");
const uploadedVideo__time = document.getElementById("uploadedVideo__time");
const channel__video__avatar = document.getElementById('channel__video__avatar');
const channel__video__name = document.getElementById('channel__video__name');
const channel__video__views = document.getElementById("channel__video__views__1");
const channel__video__time = document.getElementById("channel__video__time");

function calculateTime() {
    if (uploadedVideoTime <= 59) {
			uploadedVideo__time.innerText = `0:${uploadedVideoTime}`;
			channel__video__time.innerText = `0:${uploadedVideoTime}`;
		} else if (uploadedVideoTime > 59 & uploadedVideoTime < 120) {
			uploadedVideoTime = uploadedVideoTime - 60;
			if (uploadedVideoTime < 10) {
				uploadedVideo__time.innerText = `1:0${uploadedVideoTime}`;
				channel__video__time.innerText = `1:0${uploadedVideoTime}`;
			} else {
				uploadedVideo__time.innerText = `1:${uploadedVideoTime}`;
				channel__video__time.innerText = `1:${uploadedVideoTime}`;
			}
		} else if (uploadedVideoTime > 119 & uploadedVideoTime < 180) {
			uploadedVideoTime = uploadedVideoTime - 120;
			if (uploadedVideoTime < 10) {
				uploadedVideo__time.innerText = `2:0${uploadedVideoTime}`;
				channel__video__time.innerText = `2:0${uploadedVideoTime}`;
			} else {
				uploadedVideo__time.innerText = `2:${uploadedVideoTime}`;
				channel__video__time.innerText = `2:${uploadedVideoTime}`;
			}
		} else if (uploadedVideoTime > 179 & uploadedVideoTime < 240) {
			uploadedVideoTime = uploadedVideoTime - 180;
			if (uploadedVideoTime < 10) {
				uploadedVideo__time.innerText = `3:0${uploadedVideoTime}`;
				channel__video__time.innerText = `3:0${uploadedVideoTime}`;
			} else {
				uploadedVideo__time.innerText = `3:${uploadedVideoTime}`;
				channel__video__time.innerText = `3:${uploadedVideoTime}`;
			}
		} 
}

function uploadVideoBtn() {
	if (videoUrl != "" & titleLength.value.length != 0) {
		uploadedVideoTitle = titleLength.value;
        uploadedVideo__title.innerHTML = uploadedVideoTitle;
        uploadedVideo__views.innerHTML = `${myChannelName} &#8226; 0 wyświetleń &#8226; dzisiaj`;
        uploadedVideo__avatar.src = yourAvatar;
        channel__video__avatar.src = yourAvatar;
        channel__video__name.innerHTML = uploadedVideoTitle;
        channel__video__views.innerHTML = `${myChannelName} &#8226; 0 wyświetleń &#8226; dzisiaj`;
        hidden__video.classList.add('uploaded');
        showVideoYourChannel = true;
        uploadedVideoSrc = videoUrl;
        uploadedVideoTime = Math.round(uploadVideo__video__src.duration) - 1;
        calculateTime();
        uploadVideoClose();
	}
}
