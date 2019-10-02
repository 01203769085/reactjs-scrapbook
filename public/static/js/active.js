(function ($) {
    'use strict';

    if ($.fn.owlCarousel) {
        // :: 1.0 Welcome Post Slider Active Code
        // :: 2.0 Instagram Slider Active Code
        $(".instargram_area").owlCarousel({
            items: 6,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            nav: true,
            navText: ['', ''],
            responsive: {
                320: {
                    items: 1
                },
                480: {
                    items: 2
                },
                576: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        })
        // :: 3.0 Related Post Slider Active Code
        $(".related-post-slider").owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            nav: true,
            margin: 30,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            responsive: {
                320: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        })
    }

    // :: 4.0 ScrollUp Active JS
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>'
        });
    }

    // :: 5.0 CounterUp Active JS
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 6.0 PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: 7.0 Search Form Active Code
    $(".searchBtn").on('click', function () {
        $(".search-hidden-form").toggleClass("search-form-open");
    });

    // :: 8.0 Search Form Active Code
    $("#pattern-switcher").on('click', function () {
        $("body").toggleClass("bg-pattern");
    });
    $("#patter-close").on('click', function () {
        $(this).hide("slow");
        $("#pattern-switcher").addClass("pattern-remove");
    });
    
    // :: 9.0 wow Active Code
    if ($.fn.init) {
        new WOW().init();
    }

    // :: 10.0 matchHeight Active JS
    if ($.fn.matchHeight) {
        $('.item').matchHeight();
    }

    var $window = $(window);

    // :: 11.0 Preloader active code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });

        setTimeout(function(){
            $(".welcome-post-sliders").owlCarousel({
                items: 4,
                loop: true,
                autoplay: true,
                smartSpeed: 1500,
                margin: 10,
                nav: true,
                navText: ['', ''],
                responsive: {
                    320: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    992: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    }
                }
            })
            
        },2000);
       
    });
    window.onload = function() {
        // Month Day, Year Hour:Minute:Second, id-of-element-container
        countUpFromTime("Oct 17, 2018 21:00:00", 'countup1'); // ****** Change this line!
      };
      function countUpFromTime(countFrom, id) {
        countFrom = new Date(countFrom).getTime();
        var now = new Date(),
            countFrom = new Date(countFrom),
            timeDifference = (now - countFrom);
          
        var secondsInADay = 60 * 60 * 1000 * 24,
            secondsInAHour = 60 * 60 * 1000;
          
        let days = Math.floor(timeDifference / (secondsInADay) * 1);
        let years = Math.floor(days / 365);
        if (years > 1){ days = days - (years * 365) }
        let hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
        let mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
        let secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
      
        var idEl = document.getElementById(id);
        idEl.getElementsByClassName('years')[0].innerHTML = years;
        idEl.getElementsByClassName('days')[0].innerHTML = days;
        idEl.getElementsByClassName('hours')[0].innerHTML = hours;
        idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
        idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
      
        clearTimeout(countUpFromTime.interval);
        countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
      }
})(jQuery);