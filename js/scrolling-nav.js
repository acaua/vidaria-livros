//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Update the contact form action with the obfuscated email address
$(function() {
  var base64_email = 'YWNhdWEuZmFyaWEyQGdtYWlsLmNvbQ==';
  var base_url = '//formspree.io/';
  var action = base_url + atob(base64_email);
  $('#contact-form').attr('action', action);
});
