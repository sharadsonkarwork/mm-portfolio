var offsetTop = $('#skills').offset().top;
$(window).scroll(function () {
    var height = $(window).height();
    if ($(window).scrollTop() + height > offsetTop) {
        jQuery('.progress-box').each(function () {
            jQuery(this).find('.data-percent').animate({
                width: jQuery(this).attr('data-percent')
            }, 2000);
        });
    }
});

$(document).ready(function ($) {
    function animateElements() {
        $('.progressbar').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percentange');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size: 154,
                    thickness: 42,
                    emptyFill: "#fff",
                    fill: {
                        color: '#fac921'
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
                }).stop();
            }
        });
    }
    animateElements();
    $(window).scroll(animateElements);
});

$(window).on('load', function () {
    $(".loader").delay(1000).addClass('loaded');

});

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()

    $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
    )
})

$(document).ready(function () {
    $('.menu-bar').click(function () {
        $(this).toggleClass('open');
        $('.navigation-menu').toggleClass('open');
        $('.navigation-overlay').toggleClass('open');
    });
    $('.navigation-overlay').click(function () {
        $(this).removeClass('open');
        $('.navigation-menu').toggleClass('open');
        $('.menu-bar').toggleClass('open');
    });
});

$('#project-carousal').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    center: true,
    dots: false,
    navText: ["<img src='images/left-arrow.png'>", "<img src='images/right-arrow.png'>"],
    responsive: {
        0: {
            items: 1
        },
        991.98: {
            items: 2
        }
    }
})

$('#testimonial-carousal').owlCarousel({
    loop: false,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})

$('#company-carousal').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});


$(window).scroll(function() {
    if ($(this).scrollTop() > 160){
        $('.sidebar').addClass("sticky-column");
    } else {
        $('.sidebar').removeClass("sticky-column");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();
    let timeline = new TimelineMax();
    timeline
    .to('.img-thumb', 4,{
         y:95,
         ease:Power3.easeInOut
    })
    .to('.img-index', 4,{
        y:77,
        ease:Power3.easeInOut
    }, '-=4')
    .to('.img-middle', 4,{
        y:20,
        ease:Power3.easeInOut
    }, '-=4')
    .to('.img-lower', 4,{
        y:-20,
        ease:Power3.easeInOut
    }, '-=4')
    let scene = new ScrollMagic.Scene({
        triggerElement: '.animation-section',
        duration: '100%',
        triggerHook: 0,
        offset: ' 0'
    })
    .setTween(timeline)
    .setPin('.animation-section')
    .addTo(controller);
});


var $svg = $('#Layer_1').drawsvg({
    duration: 2500,
    reverse: true
});
$svg.drawsvg('animate');
