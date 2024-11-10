// Function for closing the banner while clicking X mark
var banner = document.getElementById("banner")
var bannerclose = document.getElementById("banner-close")

bannerclose.addEventListener('click', function () {
    banner.remove()
})

// Function for preview sidebar when clicking the menu toogle
var sidebar = document.getElementById("sidebar")
var sideopen = document.getElementById("sideopen")

sideopen.addEventListener('click', function () {
    sidebar.style.left = 0
    // sidebar.style.transitionDuration = "1s"
})

//Function to close the sidebar while clicking X mark
var sidebar = document.getElementById("sidebar")
var sideclose = document.getElementById("sideclose")

sideclose.addEventListener('click', function () {
    sidebar.remove()
})

// Function to change the like button color to red when clicking it.
var like = document.querySelectorAll(".like-button");
like.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (event.target.src.indexOf("blackheart") > 0) {
            event.target.src = "img/icons/redheart.png";
        } else {
            event.target.src = "img/icons/blackheart.png";
        }
    });
});

// Function for slider
const leftButton = document.getElementById('slider-left-activate');
const rightButton = document.getElementById('slider-right-activate');
const slideContainer = document.querySelector('.slide-container');
const slides = slideContainer.querySelectorAll('.slide-image');
let counter = 0;

// Set each slide's position
slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

leftButton.addEventListener('click', function () {
    counter--;
    slideImage();
});

rightButton.addEventListener('click', function () {
    counter++;
    slideImage();
});

function slideImage() {
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`; // Corrected the typo here
    });
}

