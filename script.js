anime({
    easing: 'easeOutExpo',
    duration: 1000,
    targets: [decorLine],
    height: 475     
})
anime({
    targets: document.querySelectorAll('.anchorsAtributes'),
    easing: 'easeOutExpo',
    duration: 2000,
    opacity: 1,
    marginTop: 30
})
anime({
    targets: [document.querySelector('.buttonTitle'), document.querySelector('#titleText')],
    easing: 'easeOutExpo',
    duration: 3000,
    opacity: 1,
    translateX: 20
})
$(document).bind( 'mousewheel', function (e) { 
    var nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100); 
    e.preventDefault(); 
    e.stopPropagation(); 
    $(document.body).stop().animate( { 
         scrollTop : nt 
     } , 500 , 'easeInOutCubic' );  
} )