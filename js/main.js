$(document).ready(function(){
//text animation in banner
    var textHeight = $('.first-banner h2').height()*3;
    var textWidth = $('.first-banner').width();
    var flag = 0;
    if(flag==0){
        flag=1;
        $('.js-banner-animation ').hover(function(){
            $('.first-banner .text-overlay').height(textHeight);
            $('.first-banner .text-overlay').fadeIn();
            $('.first-banner .text-overlay').fadeOut(2500);
        },function(){
            $('.js-banner-animation ').removeClass('js-banner-animation');
        })
    }



//hover in portfolio
$('#portfolio-section a').hover(function(){
    $(this).children('img').addClass('zoom-in');
    $(this).children('.portfolio-overlay').fadeIn();
    $(this).children('.portfolio-caption').animate({
        opacity: 0.55,
        left: "150",
        height: "toggle"
      }, 500);
},function(){
    $(this).children('img').removeClass('zoom-in');
    $(this).children('.portfolio-overlay').fadeOut();

    $(this).children('.portfolio-caption').fadeOut();
})


//hover in social
$('.social-section a').hover(function(){
    $(this).children('.icon-container').css('backgroundColor','#cb0000');
},function(){
    $(this).children('.icon-container').css('backgroundColor','rgba(255,255,255,0.2)');
})



$("#owl-branding-key-clients").owlCarousel({
    loop:true,
    dots:false,
    items:5,
    autoplay:true,
    smartSpeed:1200,
    nav : false, // Show next and prev buttons
    slideSpeed : 150,
    paginationSpeed : 200,
    singleItem:true,
    autoHeight: true
});















var rightarrow = $('.testimonials .right-arrow');
    leftarrow = $('.testimonials .left-arrow');
function hidearrow(){
    $('.client:first').hasClass('active') ? leftarrow.fadeOut() : leftarrow.fadeIn();
    $('.client:last').hasClass('active') ? rightarrow.fadeOut() : rightarrow.fadeIn();
    };
    hidearrow();
    $(rightarrow).on('click',function(){
        $('.testimonials .active').fadeOut(300,function(){
            $(this).removeClass('active').next('.client').addClass('active').fadeIn();
            hidearrow();
        });
    });
    $(leftarrow).on('click',function(){
        $('.testimonials .active').fadeOut(300,function(){
            $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
            hidearrow();
        });
    });
});