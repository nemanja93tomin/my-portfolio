/**
 * User: Nemanja Tomin (nemanja93tomin@gmail.com)
 * Web:  https://github.com/nemanja93tomin
 * Date: 5/31/2017
 * Time: 11:55 AM
 */
"use strict";
(function() {
    var mobileMenuTrigger = $('.navigation-trigger a:last-child');

    // var navigationLink = $('.navbar-default').find('li').find('a');
    // var listItem = navigationLink.parent();
    // console.log(listItem);
    // console.log(navigationLink);

    $('.owl-carousel').owlCarousel({
        dotsSpeed         : 1400,
        dragEndSpeed      : 1400,
        dots              : true,
        items             : 3,
        autoplay          : true,
        autoplayTimeout   : 2800,
        autoplaySpeed     : 1400,
        loop              : true,
        autoplayHoverPause: true
    });


    /**
     * events
     */

    var headerContainer = $('.head-content-wrapper');
    var footerContainer = $('.footer-content-wrapper');

    headerContainer.load('header.html', function() {
        var mobileMenuTrigger = $('.navigation-trigger a:last-child');
        if(utilities.IsExisty(mobileMenuTrigger)){
            mobileMenuTrigger.click(function(ev) {
                var linksContainer = $('.mobile-links-list-container');
                var currentState = linksContainer.css('display');
                linksContainer.slideToggle();
                var icon = $(this).find('i');
                switch(currentState) {
                    case 'none':
                        icon.removeClass();
                        icon.addClass('fa fa-times');
                        return false;
                        break;
                    case 'block':
                        icon.removeClass();
                        icon.addClass('fa fa-bars');
                        break;
                }

            });
        }
        $('.nav-item, #scroll-to-top').click(function() {
            if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                && location.hostname == this.hostname){

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if(target.length){
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

        var headerContainer = $(".header-container");
        setInterval(function() {

            var windowHeight = $(window).height();
            var containerHeight = headerContainer.height();
            var padTop = windowHeight - containerHeight;

            headerContainer.css({
                'padding-top'   : Math.round(padTop / 2) + 'px',
                'padding-bottom': Math.round(padTop / 2) + 'px'
            });

        }, 10);

        $(".navbar-nav li a").click(function() {
            $(".navbar-nav li a").parent().removeClass("active-nav");
            $(this).parent().addClass("active-nav");

        });
    });
    footerContainer.load('footer.html');

    $(document).ready(function() {
        $(window).scroll(function() {
            if($(window).scrollTop() < 80){
                $('.navbar').css({
                    'margin-top': '-100px',
                    'opacity'   : '0'
                });
                $('.navbar-default').css({
                    'background-color': 'rgba(59, 59, 59, 0)'

                });
            }
            else {
                $('.navbar').css({
                    'margin-top': '0px',
                    'opacity'   : '1'
                });

                $('.navbar-default').css({
                    'background-color': 'rgba(59, 59, 59, 0.7)',
                    'border-color'    : '#444'
                });

                $('.navbar-brand img').css({
                    'height'     : '35px',
                    'padding-top': '0'
                });

                $('.navbar-nav > li > a').css({
                    'padding-top': '15px'
                });
            }
        });

        $(window).scroll(function() {

            $("section").each(function() {
                var bb = $(this).attr("id");
                var hei = $(this).outerHeight();
                var grttop = $(this).offset().top - 70;

                if($(window).scrollTop() > grttop && $(window).scorllTop() < grttop + hei){
                    $("navbar-default li a[href='#" + bb + "']").parent().addClass("active-nav");
                }
                else {
                    $("navbar-default li a[href='#" + bb + "']").parent().removeClass("active-nav");
                }
            });

        });

        // $(".bxslider").bxSlider({
        //     slideWidth : 292.5,
        //     auto       : true,
        //     // minSlide   : 1,
        //     // maxSlide   : 3,
        //     slideMargin: 50
        // });

        $(".counter-num").counterUp({
            delay: 10,
            time: 2000
        });

    });

    new WOW().init();


}());
