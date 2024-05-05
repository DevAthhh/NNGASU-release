function resetAll() {
    localStorage.clear();
    getFirstQ();
    showPage();
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        resetAll();
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

function howToReset(action) {
    if(action == 'show' && localStorage.getItem('howToReset') != 'true') {
        document.getElementById('howToReset').style.display = 'flex';
    } else if(action == 'hide') {
        document.getElementById('howToReset').style.display = 'none';
        localStorage.setItem('howToReset', 'true');
        saveLastVisit();
    }
}
