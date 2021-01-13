// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction()
};

// Get the header
var header = document.getElementById("myNav");
var topInfo = document.getElementById("topInfo");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        topInfo.classList.add("free-state");
    } else {
        header.classList.remove("sticky");
        topInfo.classList.remove("free-state");
    }
}