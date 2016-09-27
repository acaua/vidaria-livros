$(document).ready(function() {
  // Initialize affix and add an offset to add affix class on scroll
  $('#main-nav').affix({
    offset: {
      top: 300
    }
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a, .navbar-brand.page-scroll').click(function(){
    $('.navbar-ex1-collapse').collapse('hide');
  });

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


  $(".modal").on('hide.bs.modal', function(){
    var url = $(this).find("iframe").attr('src');
    $(this).find("iframe").attr('src', '');
    $(this).find("iframe").attr('src', url);
  });
});
