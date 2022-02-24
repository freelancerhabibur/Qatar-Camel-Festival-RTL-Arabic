(function ($) {
    "use strict";

    var qatar_camel_fastival = {

        /* ============================================================ */
        /* PRELOADER
        /* ============================================================ */
        preloader: function(){
            $(window).on('load', function() {
                $(".preloader").fadeOut();     
            });
        },

        /* ============================================================ */
        /* Sticky Menu
        /* ============================================================ */
        sticky_menu: function() {
            var fixed_top = $("header");
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 100) {
                    fixed_top.addClass("sticky");
                } else {
                    fixed_top.removeClass("sticky");
                }
            });
        },
        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append(
                "<a href='#top' title='Scroll Top' id='scroll-top' class='topbutton btn-hide'><i class='fas fa-level-up-alt'></i></a>"
            );
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    'normal'
                );
                return false;
            });
        },

        /* ============================================================ */
        /* Mobile Menu Integration
        /* ============================================================ */
        mobile_menu: function() {
            
            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('is-menu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('is-menu-open');
                });
        
                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("is-menu-open");
                        $(selector).removeClass("is-menu-open");
                    }          
                });
            
            };
            mobile_menu('.menu-toggler, .close-menu', '.mobile-menu');  
            	
            $('.mobile-menu ul li.menu-has-children > a').on('click', function () {
                $('.mobile-menu ul li.menu-has-children .submenu').each(function() { 
                    if($(this).is(":visible")) { 
                        $(this).slideUp(); 
                    }
                }); 
                if($(this).parent('li').children('.submenu').length) {
                    if(!$(this).parent('li').children('.submenu').is(":visible")) { 
                        $(this).parent('li').children('.submenu').slideToggle();
                    }
                    return false; 
                }
            });
        },
        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image]").each(function() {
                var $this = $(this);               
    
                if(  $this.attr("data-bg-color") !== undefined ){                        
                    $this.css("background-color", $this.attr("data-bg-color") );
                }
                if( $this.attr("data-bg-image") !== undefined ){
                    $this.css("background-image", "url("+ $this.attr("data-bg-image") +")" );    
                    $this.css("background-size", $this.attr("data-bg-size") );
                    $this.css("background-repeat", $this.attr("data-bg-repeat") );
                    $this.css("background-position", $this.attr("data-bg-position") );
                    $this.css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                }
            });
        },

        owlCarousel: function () {
            var heroCarousel = $('.hero-slider');
            if(heroCarousel.length) {            
                heroCarousel.owlCarousel({
                    autoplay: !1,
                    items: 1,
                    loop: 1,
                    dots: 1,
                    autoplaySpeed: 1000,
                    rtl: true,
                });
            };
            var awardCarousel = $('.award-carousel');
            if(awardCarousel.length) {            
                awardCarousel.owlCarousel({
                    autoplay: 1,
                    items: 1,
                    loop: 1,
                    dots: !1,
                    autoplaySpeed: 1000,
                    rtl: true,
                    margin: 30,
                });
            };
            var winnerCarousel = $('.winner-carousel');
            if(winnerCarousel.length) {            
                winnerCarousel.owlCarousel({
                    autoplay: 1,
                    // items: 4,
                    items: 2,
                    loop: 1,
                    dots: !1,
                    nav: 1,
                    navText: ["<img src='assets/images/angle-right.svg'>","<img src='assets/images/angle-left.svg'>"],
                    autoplaySpeed: 1000,
                    rtl: true,
                    margin: 10,
                    responsive: {
                        576: {
                            items: 3,
                        },
                        768: {
                            items: 2,
                        },
                        1200: {
                            items: 3,
                        },
                    }
                });
            };            
        },
        
        initializ: function() {
            qatar_camel_fastival.scroll_to_top();
			qatar_camel_fastival.mobile_menu();
			qatar_camel_fastival.background_image();
			qatar_camel_fastival.owlCarousel();
		}
    };
    $(function() {
		qatar_camel_fastival.initializ();
	});

})(jQuery);