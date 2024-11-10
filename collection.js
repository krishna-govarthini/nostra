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


// Function to search bar
var search = document.getElementById("search")
var container = document.querySelector(".right-cont")
var productList = container.querySelectorAll(".right-img")

search.addEventListener('keyup', function (event) {
    var enteredvalue = event.target.value.toUpperCase()

    for (count = 0; count < productList.length; count++) {
        var productName = productList[count].querySelector("h2").textContent.toUpperCase()

        if (productName.indexOf(enteredvalue) > -1) {
            productList[count].style.display = "block"
        }
        else {
            productList[count].style.display = "none"
        }
    }
})

// Function for filtering with checkbox
var check = document.getElementsByName("filter");
var container = document.querySelector(".right-cont");
var productList = container.querySelectorAll(".right-img");

var filter = [];

for (var count = 0; count < check.length; count++) {
    check[count].addEventListener("click", function (event) {
        if (event.target.checked) {
            filter.push(event.target.value); // Add checked value to filter array
        } else {
            var index = filter.indexOf(event.target.value);
            if (index > -1) {
                filter.splice(index, 1); // Remove unchecked value from filter array
            }
        }
        filterProducts(); // Call the filtering function after checkbox click
    });
}

function filterProducts() {
    for (var count = 0; count < productList.length; count++) {
        var product = productList[count];
        var productKeywords = product.querySelector("p").textContent.toLowerCase(); // Get keywords from hidden <p> tag

        // Check if any keyword in the filter matches the product's keywords
        var matchFound = filter.some(function (f) {
            return productKeywords.includes(f);
        });

        if (matchFound || filter.length === 0) { // If no filters are applied, show all products
            product.style.display = "block"; // Show product if it matches the filter
        } else {
            product.style.display = "none"; // Hide product if it doesn't match the filter
        }
    }
}

