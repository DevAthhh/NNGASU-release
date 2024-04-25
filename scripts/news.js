var box1 = document.querySelector('.box1').style;
var box2 = document.querySelector('.box2').style;
var box3 = document.querySelector('.box3').style;
var box4 = document.querySelector('.box4').style;

async function select1(x) {
    if (x == 0) {
        box2.width = '70px';
        box3.width = '70px';
        box4.width = '70px';
        box1.width = '1000px';
    } else if(x == 1) {
        box1.width = '70px';
        box3.width = '70px';
        box4.width = '70px';
        box2.width = '1000px';
    } else if (x == 2) {
        box1.width = '70px';
        box2.width = '70px';
        box4.width = '70px';
        box3.width = '1000px';
    } else if (x == 3) {
        box1.width = '70px';
        box3.width = '70px';
        box2.width = '70px';
        box4.width = '1000px';
    }
}