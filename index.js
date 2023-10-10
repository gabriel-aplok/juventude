const header = document.getElementById("header");

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

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("slides");
	let dots = document.getElementsByClassName("dot");

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}