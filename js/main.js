/**
 * User: Agenzzia
 * Web:  www.agenzzia.com
 * Date: 5/31/2017
 * Time: 11:55 AM
 */
"use strict";
(function(){
    var mobileMenuTrigger = $('.navigation-trigger a:last-child');
    var portfolioWrapper = $('.portfolio-wrapper');
    var myProject = portfolioWrapper.find('.my-project');
    // var menuContainer = $('.main-header').find('.menu-container');
    // var scrollLinks = menuContainer.find('a');
    // console.log(scrollLinks);

    var active = -1;


    /**
     * events
     */


    var headerContainer = $('.head-content-wrapper');
    var footerContainer = $('.footer-content-wrapper');

    headerContainer.load('header.html',function(){
        var mobileMenuTrigger = $('.navigation-trigger a:last-child');
        var navigationLink = $('.menu-container').find('a');
        var smallNavigationLink = $('.mobile-links-list-container').find('a');
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
        navigationLink.click(function(ev) {
            var target = $(this).attr('data-target');
            var index = $(this).parent().index();
            var offset = Math.abs(index -active);
            console.log(offset);
            $('html, body').animate({
                'scroll-top':$(target).offset().top -69
            },500 * offset
            );
            active = index;
        });

        smallNavigationLink.click(function(ev) {
            var target = $(this).attr('data-target');
            var index = $(this).parent().index();
            var offset = Math.abs(index -active);
            console.log(offset);
            $('html, body').animate({
                'scroll-top':$(target).offset().top -320
            },500 * offset
            );
            active = index;
        });

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100){
                $('.main-header').addClass('change')
            }
            else{
                $('.main-header').removeClass('change')
            }
        });
    });



    footerContainer.load('footer.html');

    // myProject.each(function() {
    //    $(this).append('<i class="fa fa-search-plus"></i>');
    // });

    $(document).ready(function() {
        new WOW().init();
    });
}());
