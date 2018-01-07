/*=== full screen background ===*/
$(document).ready(function($){
 // Defining a function to set size for #hero 
    function fullscreen(){
        jQuery('.module_full_bg').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
    }
  
    fullscreen();

  // Run the function in case of window resize
  jQuery(window).resize(function() {
       fullscreen();         
    });

});

/*=== menu ===*/	

$(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        $("#header, #parent_1, nav a, .nome, .logo_fg_menu").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("#header, #parent_1, nav a, .nome, .logo_fg_menu").removeClass("active");
    }
});

// menu open/close toggle
$(document).ready(function() {
		
//responsive menu

	$('.menu-toggle').click(function() {
			$(this).toggleClass("on");
    	if( $('nav').hasClass('active-nav') ) {
	      $('.mobile-nav-container').toggleClass('active-nav');
	      $('.menu-toggle').toggleClass('active-nav');
	      $('nav').toggleClass('active-nav');
    		$('nav li').removeClass('show-nav');

	      // Remove Page Crop
	      setTimeout(function(){
        $('.page-wrap').removeClass('crop'); // release the "proper" crop
        $('.page-wrap').height('auto'); // resets height for scolling
      	}, 100);

    	} else {
    		$('.page-wrap').addClass('crop'); // "proper" crop
	      $('.menu-toggle').toggleClass('active-nav');
	      $('.mobile-nav-container').toggleClass('active-nav');
	      $('nav').toggleClass('active-nav');
	      
        
	      // Show me the links
	      var timer = 0;
	      $.each($('nav li'), function (i, s) {
	        timer = 25 * i;
	        setTimeout(function () {
	          $(s).addClass('show-nav');
	        }, timer); // show menu items on timer
	      });
      	
	    }
		//close menu from item 'nav li a' and background
		$('nav li a, .mobile-nav-container').on('click', function(){
		$(".menu-toggle").click();
        $("nav li a, .mobile-nav-container").removeClass("active-nav");
		});
	});

  });

/*=== cookie policy - cookiechoices ===*/
  
$(document).ready(function(){ 
$.cookieBar({
    bottom: false,
    acceptOnScroll: 50
});
});

/*=== wow ===*/
$(document).ready(function(){ 
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       75,
       /* callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }*/
      }
    );
    wow.init();   
});

/*=== scroll from menu - sotto jquery.nav.min.js ===*/

$(document).ready(function() {
			$('#navmenu').onePageNav();
		});

/*=== Isotope ===*/
// external js: isotope.pkgd.js
/* jquery start */
$(document).ready(function(){
  
 var $container = $('#container');

  $(document).click(function(){
    $container.isotope( 'reLayout');
  });

// initialize Isotope
$container.isotope({
  // options...
  itemSelector : '.element',
  //resizable: false, // disable normal resizing
  layoutMode : 'masonry',
   //percentPosition: true,
  // set columnWidth to a percentage of container width
 // masonry: { columnWidth: $container.width() / 5 }
  
}); 

  $container.isotope('reLayout', function(){
    $('.element').css('opacity', '1');
    //$('#filters a:first-child').click();
    //$('#loading').fadeOut();
  });


// update columnWidth on window resize
$(window).smartresize(function(){
  $container.isotope('reLayout');
  /*$container.isotope({
    // update columnWidth to a percentage of container width
    masonry: { columnWidth: $container.width() / 5 }
  });*/
  
  $('.element-sizer').text($(window).width());
});

/*=== Images Loaded ===*/
$( function() {

  // initialize Masonry
  var $container = $('#container').isotope();
  // layout Masonry again after all images have loaded
  $container.imagesLoaded( function() {
    $container.isotope();
  });
  
});

  //Filters
      var $optionSets = $('#options .option-set'),
          $optionLinks = $optionSets.find('a');

      $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $container.isotope( options );
        }
        
        return false;
      });
  });

/*=== fancybox ===*/    

$(document).ready(function() {

	$(".fancybox")
		.fancybox({
			width: '85%',
			height: '100%',
			prevEffect		:	'none',
			nextEffect		:	'none',
			closeBtn		:	true,
			padding			:	0,
			'transitionIn'	:	'elastic',
			'transitionOut'	:	'elastic',
			'speedIn'		:	600, 
			'speedOut'		:	200, 
			'overlayShow'	:	false,
			helpers		: {
				title	: { type : 'inside' },
				buttons	: {},
			}
		});
});

/*=== scroll up button ===*/ 

$(document).ready(function () {

   /* $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });*/

    $('.scrollup, .child_3').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});

/*=== down arrow function ===*/

$(document).ready(function() {
  $(".down_arrow").click(function() {
    $('html, body').animate({
      scrollTop: $('#start').offset().top - 50
    },600);
	return false; 
  });
});

// JavaScript Document

/*====== Google Analytic ======*/
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-42363320-1', 'auto');
  ga('set', 'anonymizeIp', true);
  ga('send', 'pageview');
  ga('require', 'displayfeatures');