$(document).ready(function() {
  // Initialize affix and add an offset to add affix class on scroll
  $('#main-nav').affix({
    offset: {
      top: 300
    }
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a, .navbar-brand.page-scroll').click(function(){
    $('.navbar-collapse').collapse('hide');
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

  $("#contact-forma").on("submit", function(e) {
    e.preventDefault();
    $('#alert-message').html("abobrinha");
  });

  $("#contact-form").on("submit", function(e) {
    e.preventDefault();
    var base64_email = 'YmxvZ3ZpZGFyaWFAZ21haWwuY29t'
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
        $("#form-submit-button").prop("disabled",false).html("Enviar");
        $('#contact-form')[0].reset();
        $('#alert-message').html('<div class="alert alert-success fade in alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Mensagem enviada!</strong> Obrigada pelo contato');
      },
      error: function(err) {
        $("#form-submit-button").prop("disabled",false).html("Enviar");
        $('#alert-message').html('<div class="alert alert-danger fade in alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Erro!</strong> Ocorreu um erro, tente novamente.');
      }
    });
  });


  $(".modal").on('hide.bs.modal', function(){
    var url = $(this).find("iframe").attr('src');
    $(this).find("iframe").attr('src', '');
    $(this).find("iframe").attr('src', url);
  });
});
