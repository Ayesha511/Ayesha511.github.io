var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed:1500,
    dots:true,
    dotsEach:true,
    nav:true,
    responsive:{
        0:{
            nav:false,
            dots:false
        },
    }
});

document.getElementById("btn1").addEventListener("click", function() {
    var box = document.getElementById("green");
    if(box.style.display == "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
})



