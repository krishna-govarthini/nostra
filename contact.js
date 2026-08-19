// Function for closing the banner while clicking X mark
var banner = document.getElementById("banner")
var bannerclose = document.getElementById("banner-close")

bannerclose.addEventListener('click', function () {
    banner.remove()
})