//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(document).ready(function() {
  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
  });

  // Assigning Ajax post of contact form instead of normal submit behavior
  $("#contact-form").on("submit", function(e) {
    e.preventDefault();
    var base64_email = 'YWNhdWEuZmFyaWEyQGdtYWlsLmNvbQ==';
    var base_url = '//formspree.io/';
    var url = base_url + atob(base64_email);
    var message = $("#contact-form").serialize();
    $.ajax({
        url: url,
        method: "POST",
        data: message,
        dataType: "json",
        beforeSend: function() {
          $("#form-submit-button").prop("disabled",true).html("Enviando...");
        },
        success:function(data) {
            $("#form-block").hide();
            $("#form-error").hide();
            $("#form-success").show();
        },
        error: function(err) {
          $("#form-submit-button").prop("disabled",false).html("Enviar");
          $("#form-error").show();
        }
    });
  });

  // Init fluidvids to make youtube embeded video responsive
  fluidvids.init({
    selector: ['iframe'],
    players: ['www.youtube.com']
  });
});
