// Tab
$(".tab-navbar__item").eq(0).click(function() {
    $(".tab-navbar__item").eq(1).removeClass("active");
    $(".tab-content-item").eq(1).removeClass("active");
    $(this).addClass("active");
    $(".tab-content-item").eq(0).addClass("active");
});
$(".tab-navbar__item").eq(1).click(function() {
    $(".tab-navbar__item").eq(0).removeClass("active");
    $(".tab-content-item").eq(0).removeClass("active");
    $(this).addClass("active");
    $(".tab-content-item").eq(1).addClass("active");
});

// Slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    dots: false,
    responsive:{
        0:{
            items: 1
        },
        576:{
            items: 2
        },
        768:{
            items:3
        },
        992:{
            items:4
        }
    }
})