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
var sliderLeftButton = document.getElementById("slider-left-activate");
var sliderRightButton = document.getElementById("slider-right-activate");
var sliderContainer = document.querySelector(".slide-container");
var sliderMargin = 0;

sliderRightButton.addEventListener("click", function () {
    sliderMargin = sliderMargin + 100;

    if (sliderMargin > 200) {
        sliderMargin = 0;
        sliderContainer.style.marginLeft = "0";
    } else {
        sliderContainer.style.marginLeft = "-" + sliderMargin + "vw";
    }
});

sliderLeftButton.addEventListener("click", function () {
    sliderMargin = sliderMargin - 100;

    if (sliderMargin < 0) {
        sliderMargin = 200;
        sliderContainer.style.marginLeft = "-" + sliderMargin + "vw";
    } else {
        sliderContainer.style.marginLeft = "-" + sliderMargin + "vw";
    }
});
