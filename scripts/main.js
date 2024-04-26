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

// let lastScrollPos = window.pageYOffset || document.documentElement.scrollTop;
// let scrollPos2 = 0;

// window.addEventListener('scroll', function() {
//     let currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
//     const scrollDifference = currentScrollPos - lastScrollPos;

//     if (scrollDifference < 0) {
//         scrollPos2 -= Math.abs(scrollDifference);
//     } else {
//         scrollPos2 += scrollDifference;
//     }

//     if (scrollPos2 >= 300) {
//         scrollPos2 = 0;
//     } else if (scrollPos2 <= -100) {
//         scrollPos2 = 0;
//     }

//     lastScrollPos = currentScrollPos;

//     console.log(scrollPos2);
// });
