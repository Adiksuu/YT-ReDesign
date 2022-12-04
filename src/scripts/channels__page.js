const channels__db__name = document.getElementById("channels__db__name");
const channels__db__name__2 = document.getElementById("channels__db__name__2");
const channels__db__name__3 = document.getElementById("channels__db__name__3");
const channels__db__avatar = document.getElementById("channels__db__avatar");
const channels__db__subs = document.getElementById("channels__db__subs");
const dashboard__buttons = document.querySelector(".dashboard__buttons");
const dashboard__buttons__user = document.querySelector('.dashboard__buttons__user');
const channel__video__thumbnail = document.getElementById('channel__video__thumbnail');
const channels__db__videos__count = document.getElementById('channels__db__videos__count');
const yt__channel__vid = document.querySelectorAll('#ytChannelVid');

function channelsDbSub() {
	if (channelsPage == 1) {
		if (subsGived[1] == false) {
			subsGived[1] = true;
		} else {
			subsGived[1] = false;
		}
	} else if (channelsPage == 2) {
		if (subsGived[5] == false) {
			subsGived[5] = true;
		} else {
			subsGived[5] = false;
		}
	} else if (channelsPage == 3) {
		if (subsGived[2] == false) {
			subsGived[2] = true;
		} else {
			subsGived[2] = false;
		}
	}
}

window.setInterval(() => {
    if (channelsPage == 4) {
			channels__db__name.innerHTML = myChannelName;
			channels__db__name__2.innerHTML = myChannelName;
			channels__db__name__3.innerHTML = `@${myChannelName}`;
			channels__db__avatar.src = yourAvatar;
            dashboard__buttons.classList.add("show");
            dashboard__buttons__user.classList.remove("show");
			channel__video__avatar.src = yourAvatar;
			channel__video__name.innerHTML = uploadedVideoTitle;
			channel__video__thumbnail.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/320px-A_black_image.jpg'
			channel__video__views.innerHTML = `${myChannelName} &#8226; 0 wyświetleń &#8226; dzisiaj`;
			channels__db__banner.src = channelBannerImg;
			if (uploadedVideoTitle != '') {
				channels__db__videos__count.innerHTML = `${yt__channel__vid.length} film`;
			} else {
				channels__db__videos__count.innerHTML = 'Brak filmów';
			}
			calculateTime();
    }
    else if (channelsPage == 1) {
			channels__db__name.innerHTML = channels[1];
			channels__db__name__2.innerHTML = channels[1];
			channels__db__name__3.innerHTML = `@${channels[1]}`;
			channels__db__avatar.src = avatars[1];
			dashboard__buttons.classList.remove("show");
            dashboard__buttons__user.classList.add('show');
			channel__video__avatar.src = avatars[1];
			channel__video__name.innerHTML = 'Natura w 2022';
			channel__video__thumbnail.src = './src/assets/images/video__3.png';
			channel__video__time.innerHTML = "3:00";
			channel__video__views.innerHTML = `${channels[1]} &#8226; ${watchVideo__views[1]} wyświetleń &#8226; ${watchVideo__times[1]}`;
			channels__db__banner.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/320px-A_black_image.jpg';
			channels__db__videos__count.innerHTML = `${yt__channel__vid.length} film`
	}
	else if (channelsPage == 2) {
			channels__db__name.innerHTML = channels[5];
			channels__db__name__2.innerHTML = channels[5];
			channels__db__name__3.innerHTML = `@${channels[5]}`;
			channels__db__avatar.src = avatars[5];
			dashboard__buttons.classList.remove("show");
			dashboard__buttons__user.classList.add('show');
			channel__video__avatar.src = avatars[5];
			channel__video__name.innerHTML = 'Wielkanoc w 2023 to będzie HIT!';
			channel__video__thumbnail.src = './src/assets/images/video__2.png';
			channel__video__time.innerHTML = "0:15";
			channel__video__views.innerHTML = `${channels[5]} &#8226; ${watchVideo__views[2]} wyświetleń &#8226; ${watchVideo__times[2]}`;
			channels__db__banner.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/320px-A_black_image.jpg';
			channels__db__videos__count.innerHTML = `${yt__channel__vid.length} film`
	}
	else if (channelsPage == 3) {
			channels__db__name.innerHTML = channels[2];
			channels__db__name__2.innerHTML = channels[2];
			channels__db__name__3.innerHTML = `@${channels[2]}`;
			channels__db__avatar.src = avatars[2];
			dashboard__buttons.classList.remove("show");
            dashboard__buttons__user.classList.add('show');
			channel__video__avatar.src = avatars[2];
			channel__video__name.innerHTML = "Piękne miasto świata";
			channel__video__thumbnail.src = "./src/assets/images/video__1.png";
			channel__video__time.innerHTML = "0:20";
			channel__video__views.innerHTML = `${channels[2]} &#8226; ${watchVideo__views[3]} wyświetleń &#8226; ${watchVideo__times[3]}`;
			channels__db__banner.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/320px-A_black_image.jpg';
			channels__db__videos__count.innerHTML = `${yt__channel__vid.length} film`
		}
}, 100)

const channels__db__subscribe = document.getElementById('channels__db__subscribe');

window.setInterval(() => {
	if (channelsPage == 1) {
		if (subsGived[1] == true) {
			channels__db__subscribe.innerHTML = "SUBSKRYBUJESZ";
			channels__db__subs.innerHTML = watchVideo__channel__maxsubs[1];
		} else {
			channels__db__subscribe.innerHTML = "SUBSKRYBUJ";
			channels__db__subs.innerHTML = watchVideo__channel__subs[1];
		}
	} else if (channelsPage == 2) {
		if (subsGived[5] == true) {
			channels__db__subscribe.innerHTML = "SUBSKRYBUJESZ";
			channels__db__subs.innerHTML = watchVideo__channel__maxsubs[2];
		} else {
			channels__db__subscribe.innerHTML = "SUBSKRYBUJ";
			channels__db__subs.innerHTML = watchVideo__channel__subs[2];
		}
	} else if (channelsPage == 3) {
		if (subsGived[2] == true) {
			channels__db__subscribe.innerHTML = "SUBSKRYBUJESZ";
			channels__db__subs.innerHTML = watchVideo__channel__maxsubs[3];
		} else {
			channels__db__subscribe.innerHTML = "SUBSKRYBUJ";
			channels__db__subs.innerHTML = watchVideo__channel__subs[3];
		}
	}
	
}, 100)

const editChannelPage = document.getElementById("editChannelPage");

channel__video__thumbnail.addEventListener('click', function () {
	watchVideoPage.classList.add("show");
	videoChannel = channelsPage;
	changedVideo = false;
	closeChannelPage();
})

function editChannel() {
	channelPages.classList.remove("show");
	editChannelPage.classList.add('show')
}

const editChannelName = document.getElementById("editChannelName");
const editChannelNickName = document.getElementById("editChannelNickName");
const avatar_banner = document.querySelector(".avatar_banner");

window.setInterval(() => {
	editChannelName.innerText = myChannelName;
	editChannelNickName.innerText = `@${myChannelName}`;	
	avatar_banner.src = yourAvatar;
}, 100)

const editOptions__box = document.querySelector(".editOptions__box");
let changeAvatarBox

function editAvatar() {
	editOptions__box.classList.add('show');
	changeAvatarBox = 1;
	editOptionsTitle.innerText = "Wklej URL obrazu";
	editChannelInput.placeholder = "Wklej URL obrazu";
}
function editBanner() {
	editOptions__box.classList.add("show");
	changeAvatarBox = 2;
	editOptionsTitle.innerText = "Wklej URL obrazu";
	editChannelInput.placeholder = "Wklej URL obrazu";
}
function editName() {
	editOptions__box.classList.add("show");
	changeAvatarBox = 3;
	editOptionsTitle.innerText = 'Wpisz nazwę kanału';
	editChannelInput.placeholder = 'Wpisz nazwę kanału';
}

const editChannelInput = document.getElementById("editChannelInput");
const channelBanner = document.getElementById("channelBanner");
const channels__db__banner = document.getElementById("channels__db__banner");
const editOptionsTitle = document.getElementById("editOptionsTitle");

function submitChanges() {
	if (editChannelInput.value != '') {
		if (changeAvatarBox == 1) {
			yourAvatar = editChannelInput.value;
			editOptions__box.classList.remove("show");
			editChannelInput.value = "";
			save();
		} else if (changeAvatarBox == 2) {
			channelBannerImg = editChannelInput.value;
			editOptions__box.classList.remove("show");
			editChannelInput.value = "";
			save();
		} else if (changeAvatarBox == 3) {
			myChannelName = editChannelInput.value;
			editOptions__box.classList.remove("show");
			editChannelInput.value = "";
			save();
		}
	} else {
		editOptions__box.classList.remove("show");
	}
}

window.setInterval(() => {
	channelBanner.src = channelBannerImg;
}, 100)