const header = document.getElementById("header");

window.onscroll = function () {
	scrollIndicator();
};

document.addEventListener("DOMContentLoaded", () => {
	const cookieConsent = document.querySelector(".cookie-consent");
	const cookieConsentButton = document.querySelector(".cookie-consent-button");

	if (localStorage.getItem("cookie-consent")) {
		cookieConsent.style.display = "none";
	} else {
		cookieConsent.style.display = "block";
	}

	cookieConsentButton.addEventListener("click", () => {
		localStorage.setItem("cookie-consent", true);
		cookieConsent.style.display = "none";
	});
});

function headerMenu() {
	header.classList.toggle("open");
}

function scrollIndicator() {
	let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrolled = (winScroll / height) * 100;

	document.getElementById("scroll-indicator-bar").style.width = scrolled + "%";
}