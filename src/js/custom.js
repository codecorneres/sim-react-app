import jQuery from 'jquery';

jQuery(document).ready(function () {
  jQuery('.worker-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: jQuery('.worker-slider-controls .arrow-left'),
    nextArrow: jQuery('.worker-slider-controls .arrow-right'),
    centerPadding: '180px',
    centerMode: true,
    arrows: true,
    dots: true,
    appendDots: jQuery('.worker-slider-controls .dots'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: '0',
        },
      },
    ],
  });

  jQuery('.inner-page-fluid-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: jQuery('.inner-page-fluid-slider-controls .arrow-left'),
    nextArrow: jQuery('.inner-page-fluid-slider-controls .arrow-right'),
    centerPadding: '180px',
    centerMode: true,
    arrows: true,
    dots: true,
    appendDots: jQuery('.inner-page-fluid-slider-controls .dots'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: '0',
        },
      },
    ],
  });

  jQuery('.featured-post-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: jQuery('.featured-slider-controls .arrow-left'),
    nextArrow: jQuery('.featured-slider-controls .arrow-right'),
    arrows: true,
    dots: true,
    appendDots: jQuery('.featured-slider-controls .dots'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  jQuery('.serving-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: jQuery('.serving-slider-controls .arrow-left'),
    nextArrow: jQuery('.serving-slider-controls .arrow-right'),
    arrows: true,
    dots: true,
    appendDots: jQuery('.serving-slider-controls .dots'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  jQuery('.prayer-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: jQuery('.prayer-slider-controls .arrow-left'),
    nextArrow: jQuery('.prayer-slider-controls .arrow-right'),
    arrows: true,
    dots: true,
    appendDots: jQuery('.prayer-slider-controls .dots'),
    fade: true,
  });

  // Steps Slider JS Starts
  jQuery('.step-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: jQuery('.step-slider-controls .arrow-left'),
    nextArrow: jQuery('.step-slider-controls .arrow-right'),
    arrows: true,
    dots: true,
    appendDots: jQuery('.step-slider-controls .dots'),
    // fade:true,
    swipe: true,
  });

  jQuery('.step-slider').on(
    'beforeChange',
    function (event, slick, currentSlide, nextSlide) {
      // setProgress(nextSlide);
    }
  );

  var progresssteps = [];

  // set progress bar steps:
  // jQuery('.step-slider .slide-item').each(function(i,e){
  //   if(!!jQuery(e).attr('step')){
  //     var index = parseInt($(e).attr('step'));
  //     if(!!!progresssteps[index]) progresssteps[index]=[];
  //     progresssteps[index].push(i);
  //   }
  // });

  // for(var i=0; i<progresssteps.length; i++){
  //   var left=i*100/(progresssteps.length-1);
  //   // jQuery('<div class="step-counter"><p class="step" style="left:'+left+'%">Step '+(i+1)+'</p><span class="circle" style="left:'+left+'%"></span></div>').appendTo(jQuery('.progress_container .step-counter-holder'));
  //   jQuery('<div class="step-counter"><p class="step" style="left:'+left+'%">Step '+(i+1)+'</p><span class="circle"></span></div>').appendTo(jQuery('.progress_container .step-counter-holder'));
  //   // jQuery('').appendTo(jQuery('.progress_container'));
  // }

  // jQuery('.progress_container .bar').progressbar({
  //   value: 0
  // });
  // jQuery('.progress_container .step-counter:first-child').addClass('active');
  // function setProgress(step){
  //   for(var i=0; i<progresssteps.length; i++){
  //     var j=progresssteps[i].indexOf(step);
  //     if(j>-1) {
  //       var perChapterLength = 100/(progresssteps.length-1);
  //       var val=i*perChapterLength+perChapterLength*j/progresssteps[i].length;
  //       // console.log("set progressbar: ",i,j,val);
  //       jQuery('.progress_container .bar').progressbar( "value", val);
  //       jQuery('.progress_container .step-counter').removeClass('active');
  //       for(var k=0; k<=i; k++){
  //         jQuery('.progress_container .step-counter:eq('+k+')').addClass('active');
  //       }
  //       return;
  //     }
  //   }
  // }

  // Steps Slider JS Ends

  jQuery('.gallery-slider').each(function () {
    var navLeft = jQuery(this)
      .parents('.two-column-image-slider-content-box')
      .find('.gallery-slider-controls .arrow-left');
    var navRight = jQuery(this)
      .parents('.two-column-image-slider-content-box')
      .find('.gallery-slider-controls .arrow-right');
    var slideDots = jQuery(this)
      .parents('.two-column-image-slider-content-box')
      .find('.gallery-slider-controls .dots');
    jQuery(this).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: navLeft,
      nextArrow: navRight,
      arrows: true,
      dots: true,
      appendDots: slideDots,
    });
  });

  jQuery('.suggession-box-filter input').keyup(function () {
    jQuery(this).parents().find('.profile-suggession-box').addClass('visible');
  });

  jQuery(document).on('click', function (event) {
    if (!jQuery(event.target).closest('.suggession-box-filter').length) {
      jQuery('.profile-suggession-box').removeClass('visible');
    }
  });

  // Slide Toggle JS
  jQuery('.toggle-with-content-block .toggle-bar-container').addClass('intro');
  jQuery('.toggle-with-content .form-check-input').change(function () {
    if (jQuery('.toggle-with-content .form-check-input').is(':checked')) {
      jQuery('.toggle-with-content-block .toggle-bar-container').addClass(
        'intro'
      );
    } else {
      jQuery('.toggle-with-content-block .toggle-bar-container').removeClass(
        'intro'
      );
    }
  });

  // Slick Slider Filter Script on load function
  jQuery('.data-filter-list-main li:first').addClass('active');
  jQuery('.worker-slider .slide-item').addClass('show');
  jQuery('.worker-slider').slick('slickFilter', '.show');

  jQuery(document).on('click', '.data-filter-list-main li', function () {
    jQuery('.data-filter-list-main li').removeClass('active');
    jQuery(this).addClass('active');
    var cat = jQuery(this).attr('data-filter');
    if (cat !== 'all') {
      jQuery('.worker-slider').slick('slickUnfilter');
      jQuery('.worker-slider .slide-item').each(function () {
        jQuery(this).removeClass('show');
      });
      jQuery('.worker-slider .slide-item[data-filter-id=' + cat + ']').addClass(
        'show'
      );
      jQuery('.worker-slider').slick('slickFilter', '.show');
    } else {
      jQuery('.worker-slider .slide-item').each(function () {
        jQuery(this).removeClass('show');
      });
      jQuery('.worker-slider').slick('slickUnfilter');
    }
  });

  jQuery('.quick-approach-nav .search-link a').on('click', function () {
    jQuery(this)
      .parents('.site-main-header')
      .find('.search-form-main')
      .collapse('show');
    return false;
  });
  jQuery('.close-btn').on('click', function () {
    jQuery(this).parents('.search-form-main').collapse('hide');
  });

  // Progress Bar Labels
  for (var i = 1; i <= 3; i++) {
    var progressLabel = i * (100 / 4);
    jQuery('<label class="label">' + progressLabel + '</label>').appendTo(
      '.label-strip'
    );
  }
});

jQuery('.toggle').click(function () {
  jQuery('#target').toggle('');
});
