const channelName = document.getElementById("channel");
const titleText = document.getElementById("title");
const likesThumbs = document.getElementById("likes");
const likeButton = document.getElementById("like");
const dislikesThumbs = document.getElementById("dislikes");
const dislikeButton = document.getElementById("dislike");
const subscribeButton = document.getElementById("subscribe");
const logo = document.getElementById("avatar");
const musicLogo = document.getElementById("musicLogo");
const video__comments__add = document.getElementById("video__comments");
const shortsDiv = document.querySelector(".shorts");
const nextShort = document.querySelector("#nextShort");
const commentsAvatar = document.querySelector("#commentsAvatar");
const yourChannelManage = document.querySelector("#yourChannelManage");
const yourChannelNameManage = document.querySelector("#yourChannelNameManage");

let channel = 1;
let title = 1;
let like = 1;
let likeCount = 0;
let dislikeCount = 0;
let subscribed = false;
let commentTitle = addCommentBtn.value;

let myChannelName = "";
let myChannelEmail = "";
let myChannelPass = "";

let ChannelEmail = "";

let loginEmail = "";
let loginPass = "";

channels = {
	1: "Karol",
	2: "Marcin",
	3: "Fabian",
	4: "Robert",
	5: "Mateusz",
	6: "Bartek",
};
titles = {
	1: "Przykładowy film 0",
	2: "Przykładowy film 1",
	3: "Przykładowy film 2",
	4: "Przykładowy film 3",
	5: "Przykładowy film 4",
	6: "Przykładowy film 5",
};
likes = {
	1: 999,
	2: 5,
	3: 2137,
	4: 2,
	5: 2115,
	6: 69,
};
defaultLikes = {
	1: 999,
	2: 5,
	3: 2137,
	4: 2,
	5: 2115,
	6: 69,
};
avatars = {
	1: "https://avatars.githubusercontent.com/u/75419729?v=4",
	2: "https://avatars.githubusercontent.com/u/75217728?v=1",
	3: "https://avatars.githubusercontent.com/u/75215728?v=1",
	4: "https://avatars.githubusercontent.com/u/11215728?v=1",
	5: "https://avatars.githubusercontent.com/u/502342798?v=1",
	6: "https://avatars.githubusercontent.com/u/26342798?v=1",
};
let yourAvatar =
	"https://www.thetrain.com/content/plugins/all-in-one-seo-pack/images/default-user-image.png";
let yourChannel = "";
let elementDiv = document.createElement("div");
let elementID = 0;
elementDiv.id = elementID;
let channelBannerImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/320px-A_black_image.jpg";

nextShort.addEventListener("click", function () {
	channel = channel + 1;
	channelName.innerHTML = channels[channel];
	title = title + 1;
	titleText.innerHTML = titles[title] + `<span> #shorts</span>`;
	like = like + 1;
	likesThumbs.innerHTML = likes[like];
	avatar.src = avatars[channel];
	musicLogo.src = avatars[channel];
	if (likes[channel] == defaultLikes[channel]) {
		likeButton.classList.remove("like");
		likeCount = 0;
	}
	dislikeButton.classList.remove("like");
	dislikeCount = 0;
	subscribed = false;
	subscribeButton.classList.remove("subscribe");
	subscribeButton.innerText = "SUBSKRYBUJ";
});

const channel__1 = document.querySelector("#channel__1");
const channel__2 = document.querySelector("#channel__2");
const channel__3 = document.querySelector("#channel__3");
const channel__4 = document.querySelector("#channel__4");
const channel__5 = document.querySelector("#channel__5");
const channel__6 = document.querySelector("#channel__6");

let subsGived = {
	1: false,
	2: false,
	3: false,
	4: false,
	5: false,
	6: false,
};



subscribeButton.addEventListener("click", function () {
	if (channel == 1) {
		subsGived[1] = true;
	} else if (channel == 2) {
		subsGived[2] = true;
	} else if (channel == 3) {
		subsGived[3] = true;
	} else if (channel == 4) {
		subsGived[4] = true;
	} else if (channel == 5) {
		subsGived[5] = true;
	} else if (channel == 6) {
		subsGived[6] = true;
	}
});

setInterval(() => {
	if (subsGived[1] == true) {
		channel__6.classList.add("show");
	} else {
		channel__6.classList.remove("show");
	}
	if (subsGived[2] == true) {
		channel__2.classList.add("show");
	} else {
		channel__2.classList.remove("show");
	}
	if (subsGived[3] == true) {
		channel__4.classList.add("show");
	} else {
		channel__4.classList.remove("show");
	}
	if (subsGived[4] == true) {
		channel__5.classList.add("show");
	} else {
		channel__5.classList.remove("show");
	}
	if (subsGived[5] == true) {
		channel__3.classList.add("show");
	} else {
		channel__3.classList.remove("show");
	}
	if (subsGived[6] == true) {
		channel__1.classList.add("show");
	} else {
		channel__1.classList.remove("show");
	}
}, 100);

const interval = window.setInterval(() => {
	const commentsInDiv = document.querySelectorAll(".comments__comment").length;
	document.getElementById("commentsCounter").innerText = commentsInDiv;
	document.getElementById("commentsCounter2").innerText = commentsInDiv;
	const addCommentBtn = document.getElementById("addCommentBtn");

	commentTitle = addCommentBtn.value;
	console.log(commentTitle);

	if (subsGived[2] == true) {
		surveySub.innerText = "SUBSKRYBUJESZ";
		surveySubscribed = 1;
		surveySub.classList.add("subscribe");
		if (channel == 2) {
			subscribeButton.classList.add("subscribe");
			subscribeButton.innerText = "SUBSKRYBUJESZ";
		}
	} else if (subsGived[2] == false) {
		surveySub.innerText = "SUBSKRYBUJ";
		surveySubscribed = 0;
		surveySub.classList.remove("subscribe");
		if (channel == 2) {
			subscribeButton.classList.remove("subscribe");
			subscribeButton.innerText = "SUBSKRYBUJ";
		}
	}
	account.src = yourAvatar;
	commentsAvatar.src = yourAvatar;
	yourChannelManage.src = yourAvatar;
	yourChannel = myChannelName;
	yourChannelNameManage.innerText = myChannelName;

	let login__email = document.getElementById("login__email");
	let login__pass = document.getElementById("login__pass");
}, 1000);

likeButton.addEventListener("click", function () {
	if (likeCount == 0) {
		likes[channel] = likes[channel] + 1;
		likesThumbs.innerHTML = likes[channel];
		likeButton.classList.add("like");
		if (likes[channel] == 1000) {
			likesThumbs.innerHTML = "1 tys.";
		}
		if (dislikeCount == 1) {
			dislikeButton.classList.remove("like");
			dislikeCount = 0;
		}
		likeCount = 1;
	} else if (likeCount == 1) {
		likes[channel] = likes[channel] - 1;
		likesThumbs.innerHTML = likes[channel];
		likeButton.classList.remove("like");
		likeCount = 0;
	}
});
dislikeButton.addEventListener("click", function () {
	if (dislikeCount == 0) {
		dislikeButton.classList.add("like");
		dislikeCount = 1;

		if (likeCount == 1) {
			likes[channel] = likes[channel] - 1;
			likesThumbs.innerHTML = likes[channel];
			likeButton.classList.remove("like");
			likeCount = 0;
		}
	} else if (dislikeCount == 1) {
		dislikeButton.classList.remove("like");
		dislikeCount = 0;
	}
});

subscribeButton.addEventListener("click", function () {
	if (subscribed == false) {
		subscribeButton.classList.add("subscribe");
		subscribeButton.innerText = "SUBSKRYBUJESZ";
		subscribed = true;
	} else if (subscribed == true) {
		subscribeButton.classList.remove("subscribe");
		subscribeButton.innerText = "SUBSKRYBUJ";
		subscribed = false;
		subsGived[channel] = false;
	}
});

comments = document.getElementById("comment");
const comment__exit = document.querySelector(".comment__exit");
const video__comments = document.querySelector(".video__comments");

comments.addEventListener("click", function () {
	video__comments.classList.add("show");
	comment__exit.classList.add("show");
});

comment__exit.addEventListener("click", function () {
	video__comments.classList.remove("show");
	comment__exit.classList.remove("show");
});

document.addEventListener("keydown", (e) => {
	if (e.code === "Enter") {
		video__comments__add.appendChild(elementDiv);

		document.getElementById(
			"0"
		).innerHTML = `<div class="comments__comment d-flex flex-row gap-16 bw-1 bp-top-hide bp-left-hide bp-right-hide bs-solid bt-gray-400 w-10-10 my-20 p-relative">
					<img src="${yourAvatar}" alt="" class="h-48 br-all-full ml-16">
					<div class="p-absolute ml-16 left-64"><p class="fs-14 fw-500 fc-gray-700">${yourChannel} &#8226; przed chwilą</p></div>
					<div><span class="fs-16 fw-600 fc-white-000 p-absolute d-flex m-auto top-20 ml-16 left-64">${commentTitle}</span></div>
					<div class="comment__settings fc-white-000 d-flex flex-row w-10-10 p-relative top-7-10 right-16">
						<i class="fas fa-thumbs-up cursor-pointer h-16"></i>
						<i class="fas fa-thumbs-down cursor-pointer h-16"></i>
						<i class="fas fa-comment cursor-pointer h-16"></i>
						<i class="fas fa-ellipsis-v right-16 p-absolute cursor-pointer h-16" id="settings"></i>
					</div>
				</div>`;
		addCommentBtn.value = "";
	}
});

// SURVEYS

const survey__button__1 = document.querySelector("#survey__button__1");
const survey__button__2 = document.querySelector("#survey__button__2");

const survey__per__1 = document.querySelector(".survey__per__1");
const survey__per__2 = document.querySelector(".survey__per__2");

const survey__votes = document.getElementById("votes");

const survey__percent__1 = document.getElementById("survey__percent__1");
const survey__percent__2 = document.getElementById("survey__percent__2");

let survey__select = 0;
let survey__vote = 1;
let amount__percent = 100;

survey__button__1.addEventListener("click", function () {
	if (survey__select == 2) {
		survey__button__2.classList.remove("select");
		survey__per__2.classList.remove("show");
		survey__per__1.classList.remove("show");
		survey__vote = 1;
	}
	survey__button__1.classList.toggle("select");
	survey__per__1.classList.toggle("show");
	survey__per__2.classList.toggle("show");
	survey__select = 1;
	if (survey__vote == 1) {
		survey__vote++;
		survey__votes.innerHTML = `${survey__vote} głosy`;
		survey__percent__1.innerText = `${amount__percent}%`;
		survey__percent__2.innerText = `0%`;
	} else {
		survey__vote--;
		survey__votes.innerHTML = `${survey__vote} głos`;
		survey__percent__1.innerText = `50%`;
	}
});
survey__button__2.addEventListener("click", function () {
	if (survey__select == 1) {
		survey__button__1.classList.remove("select");
		survey__per__1.classList.remove("show");
		survey__per__2.classList.remove("show");
		survey__vote = 1;
		survey__percent__1.innerText = `50%`;
		survey__percent__2.innerText = `50%`;
	}
	survey__button__2.classList.toggle("select");
	survey__per__1.classList.toggle("show");
	survey__per__2.classList.toggle("show");
	survey__select = 2;
	if (survey__vote == 1) {
		survey__vote++;
		survey__votes.innerHTML = `${survey__vote} głosy`;
	} else {
		survey__vote--;
		survey__votes.innerHTML = `${survey__vote} głos`;
	}
});

const surveySub = document.getElementById("surveySub");
let surveySubscribed = 0;

surveySub.addEventListener("click", function () {
	this.classList.toggle("subscribe");

	if (surveySubscribed == 0) {
		surveySub.innerText = "SUBSKRYBUJESZ";
		surveySubscribed = 1;
		subsGived[2] = true;
	} else {
		surveySub.innerText = "SUBSKRYBUJ";
		surveySubscribed = 0;
		subsGived[2] = false;
	}
});

const manage__subs = document.getElementById("manage__subs");
const yt__subs__list = document.querySelector(".yt__subs__list");

let manage__count = false;

manage__subs.addEventListener("click", function () {
	if (manage__count == false) {
		this.innerText = "GOTOWE";
		yt__subs__list.classList.add("manage");
		manage__count = true;
	} else if (manage__count == true) {
		this.innerText = "ZARZĄDZAJ";
		yt__subs__list.classList.remove("manage");
		manage__count = false;
	}
});

const subs__del__1 = document.getElementById("subs__del__1");
const subs__del__2 = document.getElementById("subs__del__2");
const subs__del__3 = document.getElementById("subs__del__3");
const subs__del__4 = document.getElementById("subs__del__4");
const subs__del__5 = document.getElementById("subs__del__5");
const subs__del__6 = document.getElementById("subs__del__6");

subs__del__1.addEventListener("click", function () {
	subsGived[1] = false;
});
subs__del__2.addEventListener("click", function () {
	subsGived[2] = false;
});
subs__del__3.addEventListener("click", function () {
	subsGived[3] = false;
});
subs__del__4.addEventListener("click", function () {
	subsGived[4] = false;
});
subs__del__5.addEventListener("click", function () {
	subsGived[5] = false;
});
subs__del__6.addEventListener("click", function () {
	subsGived[6] = false;
});

const survey__like = document.querySelector("#survey__like");
const survey__dislike = document.querySelector("#survey__dislike");

const survey__likes = document.getElementById("survey__likes");

let survey__liked = false;
let survey__disliked = false;

let survey__likes__1 = 0;

survey__like.addEventListener("click", function () {
	if (survey__liked == false) {
		survey__like.classList.add("like");
		survey__likes__1++;
		survey__likes.innerText = `${survey__likes__1}`;
		survey__liked = true;
	} else if (survey__liked == true) {
		survey__like.classList.remove("like");
		survey__likes__1--;
		survey__likes.innerText = `${survey__likes__1}`;
		survey__liked = false;
	}
	if (survey__disliked == true) {
		survey__dislike.classList.remove("like");
		survey__like.classList.add("like");
		survey__likes.innerText = `${survey__likes__1}`;
		survey__liked = true;
		survey__disliked = false;
	}
});

survey__dislike.addEventListener("click", function () {
	if (survey__liked == true) {
		survey__like.classList.remove("like");
		survey__dislike.classList.toggle("like");
		survey__likes__1--;
		survey__likes.innerText = `${survey__likes__1}`;
		survey__liked = false;
		survey__disliked = true;
	} else if (survey__liked == false) {
		survey__dislike.classList.toggle("like");
		survey__disliked = true;
	}
});

const sign__name = document.getElementById("sign__name");
const sign__email = document.getElementById("sign__email");
const sign__pass = document.getElementById("sign__pass");

const register__account = document.getElementById("register__account");

register__account.addEventListener("click", function () {
	if (ChannelEmail == "") {
		if (
			(sign__name.value != "") &
			(sign__email.value != "") &
			(sign__pass.value != "")
		) {
			save();
			myChannelName = sign__name.value;
			myChannelEmail = sign__email.value;
			myChannelPass = sign__pass.value;
			ChannelEmail = myChannelEmail;
			closeAccount();
		}
	} else {
		console.log("Limit kont osiągnięty (1)");
	}
});

const login__account = document.getElementById("login__account");

login__account.addEventListener("click", function () {
	loginEmail = login__email.value;
	loginPass = login__pass.value;
	if (loginEmail != "" & loginPass != "") {
		if (loginEmail == myChannelEmail & loginPass == myChannelPass) {
			closeAccount();
		}
	}
});



// WATCHVIDEO FUNCTIONS

const watchVideo__video = document.getElementById("watchVideo__video");
const watchVideo__title = document.getElementById("watchVideo__title");
const watchVideo__view = document.getElementById("watchVideo__view");
const watchVideo__time = document.getElementById("watchVideo__time");
const watchVideo__like = document.getElementById("watchVideo__like");
const watchVideo__dislike = document.getElementById("watchVideo__dislike");
const watchVideo__like__count = document.getElementById("watchVideo__like__count");
const watchVideoAvatar = document.getElementById("watchVideoAvatar");
const watchVideoChannelSub = document.getElementById("watchVideo__channel__sub");
const watchVideo__channel__sub__count = document.getElementById('watchVideo__channel__sub__count');
const watchVideoSubBtn = document.getElementById("watchVideo__sub");

let watchVideo__titles = {
	1: "Natura w 2022",
	2: "Wielkanoc w 2023 to będzie HIT!",
	3: "Piękne miasto świata",
	4: ""
}
let watchVideo__views = {
	1: 72,
	2: 380,
	3: 612,
	4: 0
}
let watchVideo__times = {
	1: "2 dni temu",
	2: "4 tyg. temu",
	3: "dzisiaj",
	4: "dzisiaj"
}
let watchVideo__likes = {
	1: 0,
	2: 124,
	3: 381,
	4: 0,
}
let watchVideo__maxlikes = {
	1: 1,
	2: 125,
	3: 382,
	4: 1
};
let watchVideo__channel__subs = {
	1: 3,
	2: 694,
	3: 978,
	4: 0
};
let watchVideo__channel__maxsubs = {
	1: 4,
	2: 695,
	3: 979,
	4: 1
};
let watchVideo__videos = {
	1: "https://player.vimeo.com/external/396069576.sd.mp4?s=f61f70b32762fc09e7f2fa9d4328a60a109b3577&profile_id=164&oauth2_token_id=57447761",
	2: "https://vod-progressive.akamaized.net/exp=1670086619~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4841%2F15%2F399208775%2F1702302026.mp4~hmac=c057518fee701bad98a87a6affb4abe9d09f9430d0a43f7e16f62a1f59e82aad/vimeo-prod-skyfire-std-us/01/4841/15/399208775/1702302026.mp4",
	3: "https://vod-progressive.akamaized.net/exp=1670086557~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1899%2F13%2F334495726%2F1321103467.mp4~hmac=daf4dc625662228194be3806473d18340d7d7811170fe0dac99ff94b9ffa1d69/vimeo-prod-skyfire-std-us/01/1899/13/334495726/1321103467.mp4",
	4: "",
};
let videoChannel = 1;
let changedVideo = false;

window.setInterval(() => {

	watchVideo__titles[4] = uploadedVideoTitle;
	watchVideo__videos[4] = uploadedVideoSrc;

	if (videoChannel == 1) {
		if (changedVideo == false) {
			watchVideo__video.src = watchVideo__videos[1];
			watchVideo__like__count.innerText = watchVideo__likes[1];
			watchVideoAvatar.src = avatars[1];
			watchVideoChannelSub.innerText = channels[1];
			watchVideo__channel__sub__count.innerText = watchVideo__channel__subs[1];
			changedVideo = true;
			if (subsGived[1] == true) {
				watchVideoSubBtn.classList.add("subscribe");
				watchVideoSubBtn.innerText = "SUBSKRYBUJESZ";
				watchVideo__channel__sub__count.innerText =
					watchVideo__channel__maxsubs[1];
			}
		}
		watchVideo__title.innerText = watchVideo__titles[1];
		watchVideo__view.innerText = watchVideo__views[1];
		watchVideo__time.innerText = watchVideo__times[1];
	} else if (videoChannel == 2) {
		if (changedVideo == false) {
			watchVideo__video.src = watchVideo__videos[2];
			watchVideo__like__count.innerText = watchVideo__likes[2];
			watchVideoAvatar.src = avatars[5];
			watchVideoChannelSub.innerText = channels[5];
			watchVideo__channel__sub__count.innerText = watchVideo__channel__subs[2];
			changedVideo = true;
			if (subsGived[5] == true) {
				watchVideoSubBtn.classList.add("subscribe");
				watchVideoSubBtn.innerText = "SUBSKRYBUJESZ";
				watchVideo__channel__sub__count.innerText =
					watchVideo__channel__maxsubs[2];
			}
		}
		watchVideo__title.innerText = watchVideo__titles[2];
		watchVideo__view.innerText = watchVideo__views[2];
		watchVideo__time.innerText = watchVideo__times[2];
	} else if (videoChannel == 3) {
		if (changedVideo == false) {
			watchVideo__video.src = watchVideo__videos[3];
			watchVideo__like__count.innerText = watchVideo__likes[3];
			watchVideoAvatar.src = avatars[2];
			watchVideoChannelSub.innerText = channels[2];
			watchVideo__channel__sub__count.innerText = watchVideo__channel__subs[3];
			changedVideo = true;
			if (subsGived[2] == true) {
				watchVideoSubBtn.classList.add("subscribe");
				watchVideoSubBtn.innerText = "SUBSKRYBUJESZ";
				watchVideo__channel__sub__count.innerText =
					watchVideo__channel__maxsubs[3];
			}
		}
		watchVideo__title.innerText = watchVideo__titles[3];
		watchVideo__view.innerText = watchVideo__views[3];
		watchVideo__time.innerText = watchVideo__times[3];
	} else if (videoChannel == 4) {
		if (changedVideo == false) {
			watchVideo__video.src = watchVideo__videos[4];
			watchVideo__like__count.innerText = watchVideo__likes[4];
			watchVideoAvatar.src = yourAvatar;
			watchVideoChannelSub.innerText = myChannelName;
			watchVideo__channel__sub__count.innerText = watchVideo__channel__subs[4];
			changedVideo = true;
		}
		watchVideo__title.innerText = watchVideo__titles[4];
		watchVideo__view.innerText = watchVideo__views[4];
		watchVideo__time.innerText = watchVideo__times[4];
	}
}, 100)

function changeVideo__1() {
	watchVideoPage.classList.add('show');
	videoChannel = 1;
	changedVideo = false;
}
function changeVideo__2() {
	watchVideoPage.classList.add('show');
	videoChannel = 2;
	changedVideo = false;
}
function changeVideo__3() {
	watchVideoPage.classList.add('show');
	videoChannel = 3;
	changedVideo = false;
}
function changeVideo__4() {
	watchVideoPage.classList.add("show");
	videoChannel = 4;
	changedVideo = false;
	channelPages.classList.remove("show");
}

let watchVideoLiked = false;
let watchVideoDisliked = false;

watchVideo__like.addEventListener('click', function () {
	if (watchVideoLiked == false) {
		if (watchVideoDisliked == false) {
			watchVideo__like.classList.add("like");
			watchVideo__like__count.innerText = watchVideo__maxlikes[videoChannel]
			watchVideoLiked = true;
		} else {
			watchVideo__like.classList.add("like");
			watchVideo__like__count.innerText = watchVideo__maxlikes[videoChannel]
			watchVideoLiked = true;
			watchVideo__dislike.classList.remove("like");
			watchVideoDisliked = false;
		}
	} else if (watchVideoLiked == true) {
		watchVideo__like.classList.remove('like');
		watchVideo__like__count.innerText = watchVideo__likes[videoChannel]
		watchVideoLiked = false;
	}
})
watchVideo__dislike.addEventListener("click", function () {
	if (watchVideoDisliked == false) {
		if (watchVideoLiked == false) {
			watchVideo__dislike.classList.add("like");
			watchVideoDisliked = true;
			watchVideo__like__count.innerText = watchVideo__likes[videoChannel];
		} else {
			watchVideo__dislike.classList.add("like");
			watchVideoDisliked = true;
			watchVideo__like.classList.remove("like");
			watchVideo__like__count.innerText = watchVideo__likes[videoChannel];
			watchVideoLiked = false;
		}
	} else if (watchVideoDisliked == true) {
		watchVideo__dislike.classList.remove("like");
		watchVideoDisliked = false;
	}
});

watchVideoSubBtn.addEventListener('click', function () {
	if (videoChannel == 1) {
		if (subsGived[1] == false) {
			subsGived[1] = true;
			watchVideoSubBtn.classList.add("subscribe");
			watchVideoSubBtn.innerText = "SUBSKRYBUJESZ";
			watchVideo__channel__sub__count.innerText = watchVideo__channel__maxsubs[1];
		} else {
			subsGived[1] = false;
			watchVideoSubBtn.classList.remove("subscribe");
			watchVideoSubBtn.innerText = "SUBSKRYBUJ";
			watchVideo__channel__sub__count.innerText = watchVideo__channel__subs[1];
		}
	} else if (videoChannel == 2) {
		if (subsGived[5] == false) {
			subsGived[5] = true;
			watchVideoSubBtn.classList.add("subscribe");
			watchVideoSubBtn.innerText = "SUBSKRYBUJESZ";
			watchVideo__channel__sub__count.innerText = watchVideo__channel__maxsubs[2];
		} else {
			subsGived[5] = false;
			watchVideoSubBtn.classList.remove("subscribe");
			watchVideoSubBtn.innerText = "SUBSKRYBUJ";
			watchVideo__channel__sub__count.innerText = watchVideo__channel__subs[2];
		}
	} else if (videoChannel == 3) {
		if (subsGived[2] == false) {
			subsGived[2] = true;
			watchVideoSubBtn.classList.add("subscribe");
			watchVideoSubBtn.innerText = "SUBSKRYBUJESZ";
			watchVideo__channel__sub__count.innerText = watchVideo__channel__maxsubs[3];
		} else {
			subsGived[2] = false;
			watchVideoSubBtn.classList.remove("subscribe");
			watchVideoSubBtn.innerText = "SUBSKRYBUJ";
			watchVideo__channel__sub__count.innerText = watchVideo__channel__subs[3];
		}
	}
})




// SAVING USER LOGIN/REGISTER

function save() {
	let Save = {
		myChannelName: myChannelName,
		myChannelEmail: myChannelEmail,
		myChannelPass: myChannelPass,
		ChannelEmail: ChannelEmail,
		loginEmail: loginEmail,
		loginPass: loginPass,
		yourAvatar: yourAvatar,
		channelBannerImg: channelBannerImg,
		// subsGived: subsGived,
	};
	localStorage.setItem("SavedItems", JSON.stringify(Save));
}
	let SaveNon = {
		myChannelName: "",
		myChannelEmail: "",
		myChannelPass: "",
		ChannelEmail: "",
		loginEmail: "",
		loginPass: "",
		yourAvatar: "https://www.thetrain.com/content/plugins/all-in-one-seo-pack/images/default-user-image.png",
		channelBannerImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/320px-A_black_image.jpg",
		// subsGived: "",
	};

function load() {
	let SaveGame = JSON.parse(localStorage.getItem("SavedItems"));

	if (typeof SaveGame.myChannelName !== "undefined") myChannelName = SaveGame.myChannelName;
	if (typeof SaveGame.myChannelEmail !== "undefined") myChannelEmail = SaveGame.myChannelEmail;
	if (typeof SaveGame.myChannelPass !== "undefined") myChannelPass = SaveGame.myChannelPass;
	if (typeof SaveGame.ChannelEmail !== "undefined") ChannelEmail = SaveGame.ChannelEmail;
	if (typeof SaveGame.loginEmail !== "undefined") loginEmail = SaveGame.loginEmail;
	if (typeof SaveGame.loginPass !== "undefined") loginPass = SaveGame.loginPass;
	if (typeof SaveGame.yourAvatar !== "undefined") yourAvatar = SaveGame.yourAvatar;
	if (typeof SaveGame.channelBannerImg !== "undefined") channelBannerImg = SaveGame.channelBannerImg;
	// if (typeof SaveGame.subsGived !== "undefined") subsGived = SaveGame.subsGived;
}

function restart() {
	localStorage.setItem("SavedItems", JSON.stringify(SaveNon));
	location.reload();
}