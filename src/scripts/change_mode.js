const channelPages = document.getElementById("channelDashboard");
const ytChannelVid = document.getElementById("ytChannelVid");

const shorts = document.querySelector("#shorts__mode");
const shortsPage = document.querySelector("#shorts");

shorts.addEventListener("click", function () {
	ytPage.classList.add("hide");
	shortsPage.classList.add("show");
});

const ytPage = document.querySelector(".yt__page");
const subs = document.querySelector("#subs__mode");
const subsPage = document.querySelector(".subs__page");

subs.addEventListener("click", function () {
	ytPage.classList.add("hide");
	subsPage.classList.add("show");
});

const home__mode = document.querySelector("#home__mode");

home__mode.addEventListener("click", function () {
	ytPage.classList.remove("hide");
	subsPage.classList.remove("show");
});

const exitShorts = document.getElementById("backMenu");
exitShorts.addEventListener("click", function () {
	ytPage.classList.remove("hide");
	shortsPage.classList.remove("show");
});
const backToYt = document.getElementById("backToYt");
backToYt.addEventListener("click", function () {
	ytPage.classList.remove("hide");
	subsPage.classList.remove("show");
});
const subs__shorts__mode = document.getElementById("subs__shorts__mode");
subs__shorts__mode.addEventListener("click", function () {
	subsPage.classList.remove("show");
	shortsPage.classList.add("show");
});
const home__refresh = document.getElementById("home__refresh");
home__refresh.addEventListener("click", function () {
	window.scroll(0, 0);
});

const logging__page = document.getElementById("logging__page");

const sign__up__page = document.getElementById("sign__up__page");
const sign__in__page = document.getElementById("sign__in__page");

const channelManage = document.getElementById("account");
const channelManageSection = document.getElementById("yt__channel__manage");

const closeChannelManage = document.getElementById("closeChannelManage");

channelManage.addEventListener("click", function () {
	ytPage.classList.add("hide");
	channelManageSection.classList.add("show");
});

closeChannelManage.addEventListener("click", function () {
	ytPage.classList.remove("hide");
	channelManageSection.classList.remove("show");
});
const changeAccountManage = document.querySelector("#changeAccountManage");

changeAccountManage.addEventListener("click", function () {
	channelManageSection.classList.remove("show");
	logging__page.classList.add("show");
	sign__up__page.classList.add("show");
});

const closeWatchVideo = document.getElementById("closeWatchVideo");
const watchVideoPage = document.getElementById("watchVideo");

closeWatchVideo.addEventListener("click", function () {
	watchVideoPage.classList.remove("show");
	watchVideoSubBtn.classList.remove("subscribe");
	watchVideoSubBtn.innerText = "SUBSKRYBUJ";
});

const logg__now = document.getElementById("logg__now");

logg__now.addEventListener("click", function () {
	sign__up__page.classList.remove("show");
	sign__in__page.classList.add("show");
});

const sign__now = document.getElementById("sign__now");

sign__now.addEventListener("click", function () {
	sign__up__page.classList.add("show");
	sign__in__page.classList.remove("show");
});

function startSignUp() {
	load();
	if ((myChannelEmail == "") & (myChannelPass == "")) {
		ytPage.classList.add("hide");
		logging__page.classList.add("show");
		sign__up__page.classList.add("show");
	}
}

function closeAccount() {
	ytPage.classList.remove("hide");
	logging__page.classList.remove("show");
	sign__up__page.classList.remove("show");
	sign__in__page.classList.remove("show");
	save();
}

const popup = document.querySelector(".makeVideo");
const uploadVideo__page = document.querySelector(".uploadVideo");

function closePopup() {
	popup.classList.remove("show");
}

function openPopup() {
	popup.classList.add("show");
}
function uploadVideo() {
	closePopup();
	uploadVideo__page.classList.add("show");
}
function uploadVideo__channelPage() {
	uploadVideo__page.classList.add("show");
	channelPages.classList.remove("show");
	ytPage.classList.remove("hide");
	channelManageSection.classList.remove("show");
}
function uploadVideoClose() {
	uploadVideo__page.classList.remove("show");
}

let showVideoYourChannel = false;
let channelsPage

function channelOpen__1() {
	ytPage.classList.add("hide");
	channelPages.classList.add("show");
	channelsPage = 1;
	channels__db__subs.innerHTML = watchVideo__channel__subs[channelsPage];
	ytChannelVid.classList.add("show");

	// if (showVideoYourChannel == false) {
	// 	ytChannelVid.classList.remove("show");
	// } else {
	// 	ytChannelVid.classList.add("show");
	// }
}
function channelOpen__2() {
	ytPage.classList.add("hide");
	channelPages.classList.add("show");
	channelsPage = 2;
	channels__db__subs.innerHTML = watchVideo__channel__subs[channelsPage];

	// if (showVideoYourChannel == false) {
	// 	ytChannelVid.classList.remove("show");
	// } else {
	// 	ytChannelVid.classList.add("show");
	// }
}
function channelOpen__3() {
	ytPage.classList.add("hide");
	channelPages.classList.add("show");
	channelsPage = 3;
	channels__db__subs.innerHTML = watchVideo__channel__subs[channelsPage];

	// if (showVideoYourChannel == false) {
	// 	ytChannelVid.classList.remove("show");
	// } else {
	// 	ytChannelVid.classList.add("show");
	// }
}

function channelOpen__4() {
	ytPage.classList.add("hide");
	channelPages.classList.add("show");
	channelsPage = 4;
	channels__db__subs.innerHTML = watchVideo__channel__subs[channelsPage];

	if (showVideoYourChannel == false) {
		ytChannelVid.classList.remove("show");
	} else {
		ytChannelVid.classList.add("show");
	}
}

function closeChannelPage() {
	channelPages.classList.remove("show");
	ytPage.classList.remove("hide");
	channelManageSection.classList.remove("show");
}
function closeEditPage() {
	channelPages.classList.add("show");
	editChannelPage.classList.remove("show");
}