$(document).ready(function(){
    $('.fa-bars').click(function(e){
        
        $('.mobile-menu').fadeToggle();
        $('.close-mobile-menu').fadeIn();
        e.stopPropagation();
    });

    $('.page-head').height($(window).height());
    var menuheight= $('header').height();
    $('#owl-demo').height($(window).height()-menuheight);
    $('.mobile-menu').height($(window).height());

    $('.close-mobile-menu').click(function(){
        $('.mobile-menu').fadeOut();
        $('.close-mobile-menu').fadeOut();
    });
    $(document.body).click(function(e){

        $('.mobile-menu').fadeOut();
        $('.close-mobile-menu').fadeOut();
    });
    $('.mobile-menu').click(function(m){
        m.stopPropagation();
    });

    $("#owl-demo").owlCarousel({
        loop:true,
        dots:false,
        items:1,
        autoplay:false,
        smartSpeed:1200,
        nav : true, // Show next and prev buttons
        slideSpeed : 500,
        paginationSpeed : 400,
        singleItem:true,
        autoHeight: true,

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    
    });
    
    $("#owl-branding").owlCarousel({
        loop:true,
        dots:false,
        items:2,
        autoplay:true,
        smartSpeed:1200,
        animateIn:'animate__jackInTheBox',
        nav : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        autoHeight: true,

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    
    });
    $('#owl-branding .trust-overlay').hover(function(){
        $(this).siblings('div').fadeToggle();
    });

    $("#owl-branding-key-clients").owlCarousel({
        loop:true,
        dots:false,
        items:10,
        autoplay:true,
        smartSpeed:1200,
        nav : false, // Show next and prev buttons
        slideSpeed : 150,
        paginationSpeed : 200,
        singleItem:true,
        autoHeight: true
    });
    $('.portofolio-in-branding img').hover(function(){
        $(this).css('bottom','80px');
        $(this).siblings('div').fadeIn();

    },function(){
        $(this).css('bottom','0');
        $(this).siblings('div').fadeOut();
    });
    $('.portfolio-images a').hover(function(){
        $(this).siblings('.shining').fadeIn();
    },function(){
        $(this).siblings('.shining').fadeOut(1000);
    });
    
});