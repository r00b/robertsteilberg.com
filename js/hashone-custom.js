jQuery(function($) {

  $('#hs-bx-slider').bxSlider({
    'pager': false,
    'auto': true,
    'mode': 'fade',
    'pause': 5000,
  });

  $('.hs-testimonial-slider').bxSlider({
    'controls': false,
    'pager': true,
    'auto': true,
    'pause': 5000,
    'mode': 'fade'
  });

  $(window).scroll(function() {

    if ($(this).scrollTop() > 100) {
      $('.page-template-home-template #hs-masthead')
      .addClass('fadeInDown')
      .fadeIn();

    } else {
      $('#hs-masthead')
      .removeClass('fadeInDown');
    }

  });

  $(".hs_client_logo_slider").owlCarousel({
    autoPlay: 4000,
    items: 5,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    pagination: false
  });

  var first_class = $('.hs-portfolio-cat-name:first').data('filter');
  $('.hs-portfolio-cat-name:first').addClass('active');

  var $container = $('.hs-portfolio-posts').imagesLoaded(function() {
    $container.isotope({
      itemSelector: '.hs-portfolio',
      layoutMode: 'fitRows',
      filter: first_class,
      percentPosition: true,
    });
  });

  $('.hs-portfolio-cat-name-list').on('click', '.hs-portfolio-cat-name', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({
      filter: filterValue
    });
    $('.hs-portfolio-cat-name').removeClass('active');
    $(this).addClass('active');
  });

  $('.hs-portfolio-image');

  $('body').imagesLoaded({
    background: '.hs-section'
  }, function() {
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 40,

    });
  });

  $(window).resize(function() {
    $.stellar('refresh');
  });

  wow = new WOW({
    offset: 100, // default
    mobile: false, // default
  })
  wow.init();



  $('.odometer').waypoint(function() {
    setTimeout(function() {
      $('.odometer1').html($('.odometer1').data('count'));
    }, 500);
    setTimeout(function() {
      $('.odometer2').html($('.odometer2').data('count'));
    }, 1000);
    setTimeout(function() {
      $('.odometer3').html($('.odometer3').data('count'));
    }, 1500);
    setTimeout(function() {
      $('.odometer4').html($('.odometer4').data('count'));
    }, 2000);
  }, {
    offset: 800,
    triggerOnce: true
  });

  $('.hs-progress-bar-length').waypoint(function() {
    $(this.element).css({
      width: $(this.element).attr('data-width') + '%',
      visibility: 'visible'
    });
  }, {
    offset: '90%',
    triggerOnce: true
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      $('#hs-back-top').removeClass('bounceInRight bounceOutRight hs-hide').addClass('bounceInRight');
    } else {
      $('#hs-back-top').removeClass('bounceInRight bounceOutRight').addClass('bounceOutRight');
    }
  });

  $('#hs-back-top').click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, 800);
  });

  $('.hs-site-title').click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, 800);
  });

  $('.hs-site-logo').click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, 800);
  });

  $('.hs-site-description').click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, 800);
  });

  $('#menu-item-about').click(function() {
    $("html,body").animate({
      scrollTop: $('#hs-about-us-section').offset().top - 82
    }, 800);
  });

  $('#menu-item-skills').click(function() {
    $("html,body").animate({
      scrollTop: $('#hs-featured-post-section').offset().top - 82
    }, 800);
  });

  $('#menu-item-resume').click(function() {
    $("html,body").animate({
      scrollTop: $('#resume').offset().top - 82
    }, 800);
  });

  $('#menu-item-projects').click(function() {
    $("html,body").animate({
      scrollTop: $('#hs-portfolio-section').offset().top - 82
    }, 800);
  });

  $('#menu-item-contact').click(function() {
    $("html,body").animate({
      scrollTop: $('#hs-contact-section').offset().top - 81
    }, 800);
  });

  $('.hs-contact-website').click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, 800);
  });

  $('.hs-toggle-menu').click(function() {
    $('.hs-main-navigation .hs-menu').slideToggle();
  });

  $(document).ready(function() {
    $('#menu-menu li a').on('click', function() {
      if ($(window).width() < 1181) {
        $('.hs-main-navigation .hs-menu').slideToggle();
      }
    });

  });

  var modals = document.getElementsByClassName("modal");
  var modalButtonIds = $(".fa-search").map(function(index) {
    return this.id;
  });
  var modalCloseButtonIds = $(".modal-close").map(function(index) {
    return this.id;
  });
  var getModal = function(id) {
    var modal = $.grep(modals, function(e) {
      if (e.id.indexOf(id) >= 0) return e;
    })[0];
    return modal
  }
  window.onclick = function(event) {
    var id = event.target.id; // button id of the modal we want
    if (jQuery.inArray(id, modalButtonIds) != -1) {
      getModal(id).style.display = "block";
    } else if (jQuery.inArray(id, modalCloseButtonIds) != -1 ||
    jQuery.inArray(event.target, modals) != -1) {
      getModal(id).style.display = "none";
    }
  }
});
