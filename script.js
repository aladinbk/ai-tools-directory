// SEARCH FUNCTION

function searchTools() {

let input = document.getElementById("searchInput").value.toLowerCase();

let cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {

let title = cards[i].innerText.toLowerCase();

if (title.includes(input)) {

cards[i].style.display = "block";

} else {

cards[i].style.display = "none";

}

}

}


// SCROLL TO TOP BUTTON

let topButton = document.getElementById("topBtn");

window.onscroll = function() {

if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

topButton.style.display = "block";

} else {

topButton.style.display = "none";

}

};

function topFunction() {

window.scrollTo({
top: 0,
behavior: "smooth"
});

}


// SIMPLE CARD ANIMATION

document.addEventListener("DOMContentLoaded", function() {

let cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

card.style.opacity = "0";
card.style.transform = "translateY(20px)";

setTimeout(() => {

card.style.transition = "0.5s";
card.style.opacity = "1";
card.style.transform = "translateY(0)";

}, index * 150);

});

});
