document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        localStorage.clear();
        getFirstQ();
        showPage();
    }
});

const menuButton = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
  
menuButton.addEventListener("click", function() {
if (isMenuOpen == false) {
    menuAction('on');
} else {
    menuAction('off');  
}
});
