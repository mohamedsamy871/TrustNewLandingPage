$(document).ready(function(){
//text overlay animation in banner
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






//numbering animation in services
$(window).scroll(function() {
    var hT = $('#achievement-section').offset().top,
        hH = $('#achievement-section').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    console.log((hT - wH), wS);
    if (wS > (hT + hH - wH)) {
        $('.count-number').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 900,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }); {
            $('.count-number').removeClass('count-number').addClass('counted');
        };
    }
});


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


//clients logo section
$("#owl-branding-key-clients").owlCarousel({
    loop:true,
    dots:false,
    items:5,
    autoplay:true,
    smartSpeed:1200,
    nav : false, 
    slideSpeed : 150,
    paginationSpeed : 200,
    singleItem:true,
    autoHeight: true
});




//testmonials section
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



//scroll
$('.scroll-top a').click(function(){
    document.querySelector('#page-carousel').scrollIntoView({ 
        behavior: 'smooth' 

      });
     // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
});
















});