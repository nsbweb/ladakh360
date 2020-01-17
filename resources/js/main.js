$(function() {

    /* Global vars */
        /* media queries */
        mq_red = '(min-width: 1300px)';
        mq_orange = '(min-width: 992px) and (max-width: 1299px)';
        mq_purple = '(max-width: 991px)';
        mq_yellow = '(min-width: 768px) and (max-width: 991px)';
        mq_green = '(max-width: 767px)';
        mq_blue = '(max-width: 479px)';
        /* animation speed */
        anSp = 500;
        anSpFast = 400;

        /* navigation */
        isMobileNav = false;
        mobileNav = '';
        //adjustMenu();
        //adjustMenuHov();
        OwlCarousels=$('.owl-carousel');   
        header = $('header');
        //if(header.length){initHeader();	}
        UiInputAppendDate = $('.input-append.date').find('input');
        SubItinerary =$('.custom-tab-wrap');
        HorizontalTab = $('#HorizontalTab, #HorizontalTab1');
        HorizontalTab2 = $('.parentHorizontalTab_1, .ChildHorizontalTab');
        UiCustomCalender=$('#custom_datepicker, .custom_datepicker');
        InnerPg=$('.inner-pg');
        ReadMore = $('.more-cont');
        TabOverview = $('#tab-overview-sect');
        FixedPkgBar = $('.top-mid-sec');
        UiCustomTwoMonthsCalender = $('.CustomTwoMonthsCalendar');
        //GolfDetails = $('.golf-details');
        CustomField =$('.custom-field');
        ClnListing = $('.cln-listings'); //29-01-2019
        NavigationBar = $('.navigation-wrap'); //29-01-2019
        SimpleScrollBar = $('.navigation-wrap > .nav > ul'); //29-01-2019
        InnerPageContent = $('.inner-page-content'); //29-01-2019
        CustomField =$('.custom-field'); //12-02-2019
        ReadMore = $('.icon-nav-list .item a em'); //15-02-2019

    //checkMQs();
    //checkFeatures();

    /**********/
    if(OwlCarousels.length){initOwlCarousels();}
    if(UiInputAppendDate.length){initUiInputAppendDate();}
    if(SubItinerary.length){initSubItinerary();}
    if(HorizontalTab.length){initHorizontalTab();}
    //if(HorizontalTab2.length){initHorizontalTab2();}
    if(UiCustomCalender.length){initUiCustomCalender();}
    if(InnerPg.length){initInnerPg();}
    if(ReadMore.length){initReadMore();}
    if(TabOverview.length){initTabOverview();}
    if(FixedPkgBar.length) {initFixedPkgBar();}
    if(UiCustomTwoMonthsCalender.length) { initUiCustomTwoMonthsCalender();}
	//if(GolfDetails.length) { initGolfDetails();}
    if(CustomField.length){initCustomField();}
    if(ClnListing.length){initClnListing();} //29-01-2019
    if(NavigationBar.length){initNavigationBar();} //29-01-2019
    if(SimpleScrollBar.length){initSimpleScrollBar();} //29-01-2019
    if(InnerPageContent.length){initInnerPageContent();} //29-01-2019
    if(CustomField.length){initCustomField();} //12-02-2019
    if(ReadMore.length){initReadMore();} //15-02-2019 
    
   	$('body,html').animate({ scrollTop: 0 }, 200);
    
});

$(window).resize(function(){
    waitForFinalEvent(function(){
        sizeOrientationChange();
        initInnerPageContent();
    }, 100, 'main resize');
    initNavigationBar();
    initSimpleScrollBar();
    initInnerPageContent();
});

if (!window.addEventListener) {
    window.attachEvent('orientationchange', sizeOrientationChange);
}else {
    window.addEventListener('orientationchange', sizeOrientationChange, false);
}

$(window).load(function(){
    $('#WebsitePreloader').slideUp('slow');
});

/* Utility
-------------------------------*/
	// fired on window orientation or size change
	function sizeOrientationChange(){
		checkMQs();
	}

	// check media query support,
	// if supported, set variables
	// if not, set 'orange' as default
	function checkMQs(){
		// returns 'true' if MQs are supported
		if(Modernizr.mq('only all')){
			mq_red_check = Modernizr.mq(mq_red);
			mq_orange_check = Modernizr.mq(mq_orange);
			mq_yellow_check = Modernizr.mq(mq_yellow);
			mq_green_check = Modernizr.mq(mq_green);
			mq_blue_check = Modernizr.mq(mq_blue);
			mq_purple_check = Modernizr.mq(mq_purple);
		}else{
			mq_red_check = false;
			mq_orange_check = true;
			mq_yellow_check = false;
			mq_green_check = false;
			mq_blue_check = false;
			mq_purple_check = false;
		}
		
		// call responsive nav (no init)
		//responsiveNav();
	}
	
	//Check device features
	function checkFeatures(){
		//touch devices
		touchEnabled = Modernizr.touch;		

		if(touchEnabled){
			//ensures that touch devices are still able to scroll up/down smoothly
			$('html, body').removeClass('no-touch').addClass('touch-mod');
		}
		
		//placeholder support
		formPlaceholders = Modernizr.input.placeholder;

		//drop shadow support
		boxShadows = Modernizr.boxshadow;

		// IE7 flag (used to disabled tours slider)
		isIE7 = $('html').hasClass('ie7');

		// IE8 flag
		isIE8 = $('html').hasClass('ie8');

		// initialise forms if they exist
		if(forms.length){
			//initForms();	
		}
	}
	
	// waits for final event to avoid multi-firing (ie:using window.resize)
	// originally from:http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed
	var waitForFinalEvent = (function () {
		var timers = {};
		return function (callback, ms, uniqueId) {
			if (!uniqueId) {
				uniqueId = "Don't call this twice without a uniqueId";
			}
			if (timers[uniqueId]) {
				clearTimeout (timers[uniqueId]);
			}
			timers[uniqueId] = setTimeout(callback, ms);
		};
	})();
	
function setLocation(url){
	window.location.href = url
}

/* Functions
-------------------------------*/
var initInnerPg = function() {
    $('#mainNav').find('a').each(function(){
        var mainNavli=$(this).find('a').attr('href');
        //alert(mainNavli);
    });
}

/* Owl Carousels Section Starts */
/*var initOwlCarousels = function() {
    var OwlElement = $('.owl-carousel');
    
}*//*29-01-2019*/

var lastScrollTop = 0;
$(window).scroll(function () {
    var wintop = $(window).scrollTop(),
        docheight = $(document).height(),
        winheight = $(window).height();
    if (lastScrollTop >= wintop) scrollDirection = 'up';
    else scrollDirection = 'down';
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 91) {
        $('.top-header').addClass('header-white');
        initInnerPageContent();//19-02-2019
    } else {
        $('.top-header').removeClass('header-white');
        initInnerPageContent();//19-02-2019
    }
    didScroll = true;
});
/** Header show / hide **/ /*08-03-2019*/
// Hide Header on on scroll down
/*var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.top-header').outerHeight();

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.top-header, .inner-top-strip, .back-btn-wrap').removeClass('nav-down').addClass('nav-up');
        $('.inner-top-strip').css('top','0');
        initInnerPageContent();//19-02-2019
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('.top-header, .inner-top-strip, .back-btn-wrap').removeClass('nav-up').addClass('nav-down');
            if($('.inner-top-strip').hasClass('fixedpos')){
                $('.inner-top-strip').css('top',navbarHeight);
                initInnerPageContent();//19-02-2019
            }else{
                $('.inner-top-strip').css('top','0');
            }
        }
    }
    lastScrollTop = st;
}*/
/** Header show / hide **/ /*08-03-2019*/


/*** Owl Carousals **/
var initOwlCarousels = function() {
    var OwlElement = $('.owl-carousel');
    var owlWrap = $('.photos-panel');
    // checking if the dom element exists
        // check if plugin is loaded
        if (jQuery().owlCarousel) {
            OwlElement.each(function(){
                // PhotoPanel carousel
                if($(this).parent().hasClass('photos-panel')){
                    var slideCount;
					if($(this).parent().hasClass('thumb-six')){ slideCount = 6}
                    else if($(this).parent().hasClass('thumb-seven')){ slideCount = 7}
                    else if($(this).parent().hasClass('thumb-four')){ slideCount = 4}
                    else {slideCount = 6}
              owlWrap.each(function(){
                var sync1= $(this).find('.photo-gallery'),
                    sync2 = $(this).find(".photo-gallery-thumb"),
                    status = $(this).find('.owl-status'),
                    imgSlider = $(this).find('.owl-carousel'),
                    slidesPerPage = slideCount,
                    syncedSecondary = true,
                    targetOwlItem = status.find('.owlItems'),
                    targetCurrentItem = status.find('.currentItem'),
                that = $(this);
               
            if($(this).hasClass('owl-singleItem')){
               $(imgSlider).owlCarousel({
                items : 1,
                slideSpeed:20000,
                nav:true,
                autoplay: false,
                mouseDrag: false,
                dots: false,
                loop: false,
                responsiveRefreshRate:200,
                onInitialized :function(elem){
                var CurrentCount = elem.item.count-1;
                $(targetCurrentItem) .find(".result").text(CurrentCount);
                  }
              }).on('changed.owl.carousel', syncPositionSingle);
                 
            }
           
            else{
              sync1.owlCarousel({
                 items:1, slideSpeed:20000, nav: true, autoplay: false,
                dots: false,
                loop: true,
                responsiveRefreshRate:200,
                  onInitialized :function(elem){
                      var CurrentCount = elem.item.count-1;
                      $(targetCurrentItem) .find(".result").text(CurrentCount);
                  }
              }).on('changed.owl.carousel', syncPosition);
            }
               
               sync2.on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items:slidesPerPage,
    dots: false,
    nav: false,
    smartSpeed: 200,
    loop:false,
    slideSpeed:500,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate:100,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>']
                }).on('changed.owl.carousel', syncPosition2);;


    function syncPosition(el) {
        //alert('hi');
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    var RemainingCount = (count-current)
    
    if(RemainingCount>=0){
         $(targetCurrentItem).find(".result").text(RemainingCount);
    }
    else{
        //alert("Minus");
        $(targetCurrentItem).find(".result").text(count);
    }
        
    if(current < 0) {
      current = count;
    }
    if(current > count){
      current = 0;
    }
    
    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
                
function syncPositionSingle(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) + 1);
    var RemainingCount = (count-current)

    $(targetCurrentItem).find(".result").text(RemainingCount);
  
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }

  }
              })
                }
                
                // Regular carousel
                else{
                      if (jQuery().owlCarousel) {
                        OwlElement.each(function(){
							if($(this).hasClass('single-item')){
								$(this).owlCarousel({items:1, nav:false, autoplay:true, dots:false, loop:false,responsiveRefreshRate:20000})
							}
                        });
                    }                    
                    if($(this).hasClass('hotel-single-item')){
                        $(this).owlCarousel({items:1, nav:true, autoplay:false, dots:false, loop:false,responsiveRefreshRate:20000})
                    }                     
                    if($(this).hasClass('tablist-carousel')){
                        $(this).owlCarousel({autoWidth:true, margin:5,navText:[ , ],slideSpeed:20000,nav:true, autoplay:false, dots:false, loop:false, responsiveRefreshRate:200})
                    }                    
                    if($(this).hasClass('testimonials-items')){
                        $(this).owlCarousel({items:1, slideSpeed:20000, nav:false, autoplay:false, dots:true, loop:false, responsiveRefreshRate:200})
                    }
                    if($(this).hasClass('.inner-banner-slider')){
                       
                        $(this).owlCarousel({items:1, slideSpeed:20000, nav:true, autoplay:false, dots:true, loop:false, responsiveRefreshRate:200})
                    }/*15-02-2019*/
                    /*if($(this).hasClass('icon-nav-list')){
                        $(this).owlCarousel({items:16, slideSpeed:20000, nav:true, autoplay:false, dots:false, loop:false, responsiveRefreshRate:200, responsive:{0:{items:2},320:{items:4},375:{items:5},480:{items:7},600:{items:10},992:{items:16}}})
                    }*/
                    if($(this).hasClass('icon-nav-list')){
                        $(this).owlCarousel({autoWidth:true, slideSpeed:20000, nav:true, autoplay:false, dots:false, loop:false, responsiveRefreshRate:200})
                    }/*15-02-2019*/
                    if($(this).hasClass('products-carousel')){
                        $(this).owlCarousel({items:4, slideSpeed:20000,  nav:true, autoplay:false, dots:false, loop:false, responsiveRefreshRate:200, responsive:{0:{items:1},320:{items:1},375:{items:2},480:{items:2},600:{items:3},992:{items:4}}})
                    }
                    else{
                        $(this).owlCarousel({ items:1, slideSpeed:20000, nav:true, autoplay:false,dots:false,loop:true, responsiveRefreshRate:200});
                    }
                  
                }                
            })
        }
}

$(function() {

    
    AutoComplete =$('#holidayTags,.holidayTags');
    AutoCompleteSelected =$('#holidayTagsSelected,.holidayTagsSelected');
    
    
    if(AutoComplete.length){initAutoComplete();}
    if(AutoCompleteSelected.length){initAutoCompleteSelected();}

});


/*Home tab starts*/
$('ul.tab-list').each(function(){
  // For each set of tabs, we want to keep track of
  // which tab is active and its associated content
  var $active, $content, $links = $(this).find('a');

  // If the location.hash matches one of the links, use that as the active tab.
  // If no match is found, use the first link as the initial active tab.
  $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
  $active.addClass('active');

  $content = $($active[0].hash);
  // Hide the remaining content
  $links.not($active).each(function () {
    $(this.hash).hide();
  });

  // Bind the click event handler
  $(this).on('click', 'a', function(e){
    // Make the old tab inactive.
    $active.removeClass('active');
    $content.hide();

    // Update the variables with the new link and content
    $active = $(this);
    $content = $(this.hash);

    // Make the tab active.
    $active.addClass('active');
    $content.show();

    // Prevent the anchor's default click action
    e.preventDefault();
  });
});
/*Home tab ends*/


$('.parentHorizontalTab_1').easyResponsiveTabs({
        type:'default', //Types:default, vertical, accordion
        width:'auto', //auto or any width like 600px
        fit:true, // 100% fit in a container
        closed:true, // Start closed if in accordion view
        tabidentify:'hor_1', // The tab groups identifier
        activate:function (event) { // Callback function if tab is switched
            var $tab = $(this);
            equalheight('.equal-heights > div, .equal-heights > li');
            //var $info = $('#nested-tabInfo');
            //var $name = $('span', $info);
            //equalheight('.equal-heights > div,.equal-heights > li');
            //$name.text($tab.text());
            //$info.show();
        }
    });

    $('.ChildHorizontalTab').easyResponsiveTabs({
        type:'default',
        width:'auto',
        fit:true,
        tabidentify:'child_hor',
        activate:function (event) {
            equalheight('.equal-heights > div, .equal-heights > li');
        }
    });

/*** EQUAL HEIGHTS ***/
var $window = $(window);
//	

equalheight = function(container){
var currentTallest = 0,
	currentRowStart = 0,
	rowDivs = new Array(),
	$elm,
	topPosition = 0;
 $(container).each(function() {

   $elm = $(this);
   $($elm).height('auto')
   topPostion = $elm.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $elm.height();
     rowDivs.push($elm);
   } else {
     rowDivs.push($elm);
     currentTallest = (currentTallest < $elm.height()) ? ($elm.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
	equalheight('.equal-heights > div, .equal-heights > li');
});

$(window).resize(function(){
	equalheight('.equal-heights > div, .equal-heights > li');
});



var initSubItinerary = function() {

$(window).resize(function() {
    if ($(window).width() < 768) {
	$('.custom-tab-wrap .tab-list').removeClass('fixedPos'); 
	$('.custom-tab-btn a').addClass('fixedPos'); 
    $('.custom-tab-wrap .tab-list').addClass('mobile');
         
    
    } else {
        $('.custom-tab-wrap .tab-list').removeClass('mobile');
         $('.itenary-section').show();
         $('.custom-tab-wrap .tab-list').slideDown();
        

    }
}).resize();    

 $( ".tab-list > li a" ).click(function(event) {
	if($(".custom-tab-wrap .tab-list.mobile").length)
	{
		    event.preventDefault();
            $('.custom-tab-wrap .tab-list li a').removeClass('active');
            $(this).addClass( "active" );

            var $TargetAside = $('.custom-tab-wrap'), 
            $BtnAside = $TargetAside.find('.custom-tab-btn'),
            $ContAside = $TargetAside.find('.tab-list'),
            $BtnActiveAside = $ContAside.find('.active').find('strong').text();
            $BtnActiveAside = $BtnActiveAside;

            $BtnAside.find('a').text($BtnActiveAside);
            var dataLabel = $(this).attr('data-label');
            $('.itenary-section').hide()
            $("#tab-"+dataLabel+"-sect").show()
            $('.custom-tab-wrap .tab-list').slideUp();
	}
	else
	{
        $(this).parents('.tab-list').find('li a').removeClass("active");
        $(this).addClass("active");
        var dataLabel = $(this).attr('data-label');
		var topStickers = $("header").outerHeight()+$(".pkg-bar").outerHeight();
                    var itneraryFixPos =$('.custom-tab-wrap .tab-list.fixedPos');
                    if(itneraryFixPos.length)
					{
                    $('html, body').animate({ scrollTop: $("#tab-"+dataLabel+"-sect").offset().top-190 }, 300);
					}
                    else
					{
                    $('html, body').animate({ scrollTop: $("#tab-"+dataLabel+"-sect").offset().top-topStickers-150 }, 300);
					}
	}
 
});
    
    
  $('.custom-tab-btn a').click(function( event ) {
            event.preventDefault();
      if($(".custom-tab-wrap .tab-list.mobile").length)
          {
              
            $('.custom-tab-wrap .tab-list').slideToggle();
            $( this ).toggleClass( "active" );
          }
             });   
    
}


//Horizontal Tab
var initHorizontalTab = function() {
$('#HorizontalTab, #HorizontalTab1').responsiveTabs({
	startCollapsed: 'accordion',
	collapsible: 'accordion',
    activate:function (event) {
        var $tab = $(this);
        initTabOverview();
        //initHorizontalTab2();
        equalheight('.equal-heights > div, .equal-heights > li');
    }
});
}

/*Gallery View Switcher starts*/
$('.gal-view-switcher').on('click', 'li', function(){
	$('.gal-view-switcher li').removeClass('active');
	$(this).addClass('active');
});

$( ".map" ).click(function() {
	$( ".map-panel" ).show();
	$( ".photos-panel" ).hide();
});
$( ".photos" ).click(function() {
	$( ".map-panel" ).hide();
	$( ".photos-panel" ).show( );
	if(booleanValue === true){
	  booleanValue = false;
	} else if(booleanValue === false){
	  booleanValue = true;
	}
 
	owl.data('packagedetails, sync2').reinit({
		singleItem : booleanValue
	});
});
/*Gallery View Switcher ends*/

$('.form-des-element').click(function(e){
    e.preventDefault();
    $(this).closest('ul').find('.form-des-details').hide();
    $(this).closest('li').find('.form-des-details').show();
    $(this).toggleClass("active")
    /*$(this).closest('li').find(".InputCustomDatepicker").addClass("active");*/
}); 

$(document).mouseup(function (e){
    var container = $(".form-des-details");    
    if (!container.is(e.target) 
        && container.has(e.target).length === 0) 
    {		
        container.hide();
        $(".InputCustomDatepicker").removeClass("active");
        $(".form-des-element").removeClass("active")
    }
});

$('.form-des-element').click(function(e){
    e.preventDefault();
    $('.form-des-details').hide();
    $(this).parent().find('.form-des-details').show();
});

$('.form-des-element').click(function(e){
    e.preventDefault();
    $(this).closest('ul').find('.form-des-details').hide();
    $(this).closest('li').find('.form-des-details').show();
}); 
	$('.toggleMenu').click(function(e){
    e.preventDefault();
        $(this).toggleClass('active');
    $(".navigation-wrap").toggleClass('open');
        
})	

/** Tooltip starts ***/
//$('[data-toggle="tooltip"]').tooltip();
$('body').tooltip({
    selector: '[data-toggle="tooltip"]'
});
/** Tooltip Ends ***/


/* Map Image bootstrapSwitch :: Starts */
$('.toggle-checkbox').each(function(){
    if($(this).closest('.view-switch').find('.ttl-view').length){
        $(this).bootstrapSwitch({state: true, inverse: true});
    }
    else{
        $(this).bootstrapSwitch({state: true});
    }
});

$('.switch-state').each(function(){
	$(this).bootstrapSwitch({inverse: true});
		
	$(this).on('switchChange.bootstrapSwitch', function(event, state) {
		$(this).closest('.view-switch').find('.ttl-view').toggleClass("disabled")
		//$(this).closest('.switch-div').find('.switch').toggleClass('disabled');
	});

	$(this).closest('.view-switch').find('.ttl-view').on('click', function () {
		var type
		type = $(this).data('switch-set')
		$(this).closest('.view-switch').find('.switch-' + type).bootstrapSwitch(type, $(this).data('switch-value'));
	});
});
/* Map Image bootstrapSwitch :: Ends */

$(".sort-sec .filter-search-panel .sort-option-list a").click(function(e) {
	e.preventDefault();
    $(this).parents('.sort-option-list').find('li').removeClass('active');
    $(this).parent().addClass('active');
    $(this).toggleClass('dsc')
    $(this).toggleClass('asc')
});


if($(window).width() < 768){
    $('.filter-search-panel-toggle.mob-display').click(function() {
        $(this).toggleClass('active');
        $('.filter-search-panel').slideToggle();
    })
}

$(".filter-search-panel-toggle").click(function(){       
        $(this).toggleClass('active');
        $('#ul-links-mobile').slideToggle();
        $(".filter-search-panel-toggle i").toggleClass("fa-angle-up fa-angle-down");
        $(".filter-content").slideToggle();
        $('.tab2-sec .resp-tabs-list').slideToggle();
        
    });


$('.filter-search-panel-toggle').click(function(e) {
	$(this).toggleClass('active');
    $('.tab2-sec .resp-tabs-list').slideToggle();
});

/*mcustomScrollbar*/
// $('.event-list').mCustomScrollbar({
//     scrollButtons:{enable:true}
// });
/*mcustomScrollbar*/



/** Template Animations **/
//jQuery(window).ready(function () {theme.init();});
jQuery(window).load(function () {theme.initAnimation(); });

'use strict';
var theme = function () {
    // prevent empty links
    // ---------------------------------------------------------------------------------------
    function handlePreventEmptyLinks() {
        $('a[href=#]').click(function (event) {
            event.preventDefault();
        });
    }
    
    // INIT FUNCTIONS
    // ---------------------------------------------------------------------------------------
    return {
        onResize: function() {
            resizePage();
        },
        
        // Animation on Scroll
        initAnimation: function () {
            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (isMobile == false) {
                $('*[data-animation]').addClass('animated');
                $('*[data-animation]').addClass('animated');
                $('.animated').waypoint(function (down) {
                    var elem = $(this);
                    var animation = elem.data('animation');
                    if (!elem.hasClass('visible')) {
                        var animationDelay = elem.data('animation-delay');
                        if (animationDelay) {
                            setTimeout(function () {
                                elem.addClass(animation + ' visible');
                            }, animationDelay);
                        } else {
                            elem.addClass(animation + ' visible');
                        }
                    }
                }, {
                    offset: $.waypoints('viewportHeight')-60
                });
            }
        }
    }
}();


$('.search-filter-btn').click(function(event){
    event.preventDefault();
    $(this).toggleClass('active');
    $('.search-filter-list').slideToggle();
    $('.lnk-close').trigger('click');//29-01-2019
    return false; 
});

/*** ScrollTop ***/
$(".totop").hide();

$(function(){
$(window).scroll(function(){
if ($(this).scrollTop()>300){
	$('.totop').slideDown();
} 
else{
	$('.totop').slideUp();
}
});

$('.totop a').click(function (e){
e.preventDefault();
$('body,html').animate({scrollTop: 0}, 500);
});
});
/*** ScrollTop ***/





/***** active link***/
$(".aside-widget a").each(function () {
   if (this.href == document.URL) {
         $(this).addClass('active');
	   $(this).attr('href', 'javascript:void();');
    }
});



/** Aside Toggle **/
if($('.aside-widget').length){
    $('.aside-widget').each(function(){
    var $TargetAside = $(this), 
        $BtnAside = $TargetAside.find('.aside-btn'),
        $ContAside = $TargetAside.find('.aside-container'),
        $BtnActiveAside = $ContAside.find('.active').text();
    
    $BtnAside.find('a').text($BtnActiveAside);
    })
}
else{
}

$('.aside-btn a').click(function( event ) {
	event.preventDefault();
	$('.aside-widget .aside-container').slideToggle();
	
});

$('.customer-experience-after .aside-btn a').html('Customer Experience');

/** Aside Toggle **/

$('.tooltip-btn').tooltip();
$(".container").tooltip('hide');




$(document).on('click','.aside-btn a', function( event ) {
	
	event.preventDefault();
	$('.hrz-tab-sec ul').slideToggle();
});


var adjustTabs = function() {
	
    if($('.normal-tab').length){
        
    }
    else{
	if($('.aside-btn').length == 0){
		$('.mob-menu form').hide();
	$('.hrz-tab-sec').prepend('<div class="aside-btn"><a href="javascript:void(0);"><i class="fa-th-list"></i></a></div>');
    $('.hrz-tab-sec').each(function(){
    var $TargetAside = $(this), 
        $BtnAside = $TargetAside.find('.aside-btn'),
        $ContAside = $('.hrz-tab-sec > ul'),
        $BtnActiveAside = $ContAside.find('.active').text();
    
    $BtnAside.find('a').text($BtnActiveAside);
    });
}
	
    if(!Modernizr.mq(mq_green)){
		$('.aside-btn').hide();
		$('.hrz-tab-sec > ul').show()
	}
	else{
		$('.aside-btn').show();
		$('.hrz-tab-sec > ul').hide()
		
	}
    }
}





//Custome tab functionality for Itinerary, Activities, Meals
$('.toggle-btn-grp').each(function () {
    var $active, $content, $links = $(this).find('a');
    $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
    $active.addClass('active');
    $content = $($active[0].hash);
    $links.not($active).each(function () {
        $(this.hash).hide();
    });
    $(this).on('click', 'a', function (e) {
        e.preventDefault();
        $active.removeClass('active');
        $content.hide();
        $active = $(this);
        $content = $(this.hash);
        $active.addClass('active');
        $content.show();
        equalheight('.equal-heights > div, .equal-heights > li');
    });
});

$('.r-tabs .r-tabs-nav .r-tabs-anchor, .view-toggle-btn').click(function (e) {
    e.preventDefault();
});

$('.resp-tab-item, .resp-accordion, .view-toggle-btn,.HrzTab .resp-tabs-list li a').click(function () {
    equalheight('.equal-heights > div, .equal-heights > li');
});
//Custome tab functionality for Itinerary, Activities, Meals Ends


/** 04May2018 start **/
var initReadMore = function () {

    var ellipsestext = "...";
    var moretext = "read more";
    var lesstext = "read less";
    $('.more-cont').each(function () {
        var showChar = $(this).attr('data-count');
        var content = $(this).html();
        if (content.length > showChar) {
            var c = content.substr(0, showChar);
            var h = content.substr(showChar - 1, content.length - showChar);
            var html = c + '<em class="moreellipses">' + ellipsestext + '</em><span class="morecontent"><em>' + h + '</em><a href="" class="morelink btn-readmore">' + moretext + '</a></span>';
            $(this).html(html);
        }
    });
    $(".morelink").click(function () {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
}

/** 04May2018 end **/
/* 04/04/17 - Script for Listing Grid View Hover Effect */
$('.grid-view > li figure  a').click(function (evt) {
    evt.preventDefault()
});
/*** Expand collapse start 27Apr2018 ***/
$('.exp-col-btn').click(function (e) {
    $('.exp-col-cont').find('.exp-col-area').slideUp();
    $('.exp-col-btn').removeClass('selected');
    $(this).addClass('selected');
    $(this).parents('.exp-col-cont').find('.exp-col-area').slideDown();
    e.preventDefault();
})
$('.exp-col-cont .btn-close1').on('click', function (e) {
    $('.exp-col-btn').removeClass('selected');
    $(this).parents('.exp-col-cont').find('.exp-col-area').slideUp();
    e.preventDefault();
})
/*** Expand collapse ends ***/
$(function () {

    $(window).on('resize', function () {
        //alert('hi');

        if ($('#pkg-listings').length) {
            $('.openEntry').remove();
            $('.ajax-entry').hide();

            var startPosX = $('#pkg-listings > li:first').position().left;
            //console.log(startPosX);
            $('.ajax-entry, #pkg-listings > li').removeClass("first last");
            $('.ajax-entry').each(function () {
                if ($(this).prev('li').position().left == startPosX) {
                    $(this).prev('li').addClass("first");
                    $(this).prevAll('.ajax-entry:first').addClass("last");
                }
            });
            $('.ajax-entry:last').addClass("last");
        }

        if ($('#recommend-pkg-tabs').length) {
            $('.openEntryRec').remove();
            $('.ajax-entry-rec').hide();

            var startPosXRec = $('#recommend-pkg-tabs > li:first').position().left;
            $('.ajax-entry-rec, #recommend-pkg-tabs > li').removeClass("first last");
            $('.ajax-entry-rec').each(function () {
                if ($(this).prev('li').position().left == startPosXRec) {
                    $(this).prev('li').addClass("first");
                    $(this).prevAll('.ajax-entry-rec:first').addClass("last");
                }
            });
            $('.ajax-entry-rec:last').addClass("last");
        }

    });

    $('#pkg-listings > li').each(function () {
        //var $thisData = $(this).html();
        var $thisClass = $(this).attr('class');

        if ($thisClass.match(/[\w-]*group[\w-]*/g)) {
            $("<li class='col-md-12 ajax-entry list-view group'></li>").insertAfter(this);
        } else if ($thisClass.match(/[\w-]*individual[\w-]*/g)) {
            $("<li class='col-md-12 ajax-entry list-view individual'></li>").insertAfter(this);
        } else {
            $("<li class='col-md-12 ajax-entry list-view'><div class='on-hover-details1'></div></li>").insertAfter(this);
        }

        $(this).click(function () {
            if ($('#pkg-listings').hasClass('grid-view')) {
                if (!$(this).hasClass('active')) {
                    $(window).trigger('resize');
                    $('.openEntry').slideUp();
                    $('.hovered').removeClass('hovered active');
                    $(this).addClass('hovered active');

                    var preview = $(this);
                    var previewData = $(this).html();
                    if (!$('.openEntry').length) {
                        //initForms();
                        preview.next('.ajax-entry').clone().addClass('openEntry').html(previewData).insertAfter(preview.nextAll('.last:first')).wrapInner("<div class='on-hover-details1'></div>").height('auto').stop().css({
                            'margin-top': -1
                        }).slideDown(function () {
                            $('.openEntry').find('.pkg-similar-head').trigger("click");
                        });
                        $('.on-hover-details1').find('.iCheck-helper, .check').remove();
                        $('.openEntry').find('input[type=radio]').unwrap('.styled-radio');

                        $.scrollTo($(".openEntry"), 500, {
                            offset: -300
                        });
                        $('.openEntry').find('input[type=radio]').iCheck({
                            'radioClass': 'styled-radio',
                            'checkedClass': 'styled-radio-checked',
                            'insert': '<div class="check"></div>'
                        });

                    } else {}
                } else {
                    $('.openEntry').slideUp(function () {
                        $(this).remove()
                    });
                    $(this).removeClass('hovered active');
                }
            } else {}
        });
    });

    /* #recommend-pkg-tabs */
    $('#recommend-pkg-tabs > li').each(function () {
        //var $thisData = $(this).html();
        var $thisClass = $(this).attr('class');
        var $thisClick = $(this).not('a');

        if ($thisClass.match(/[\w-]*group[\w-]*/g)) {
            $("<li class='col-md-12 ajax-entry-rec list-view group'><div class='on-hover-details1'></div></li>").insertAfter(this);
        } else if ($thisClass.match(/[\w-]*individual[\w-]*/g)) {
            $("<li class='col-md-12 ajax-entry-rec list-view individual'><div class='on-hover-details1'></div></li>").insertAfter(this);
        } else {
            $("<li class='col-md-12 ajax-entry-rec list-view'><div class='on-hover-details1'></div></li>").insertAfter(this);
        }

        $(this).on('click', function (event) {
            if (event.target.nodeName == 'I' || event.target.nodeName == 'A' || event.target.nodeName == 'i' || event.target.nodeName == 'a') {} else {
                if (!$(this).hasClass('active')) {
                    $(window).trigger('resize');
                    $('.openEntryRec').slideUp();
                    $('.hovered').removeClass('hovered active');
                    $(this).addClass('hovered active');

                    var previewRec = $(this);
                    var previewDataRec = $(this).html();
                    if (!$('.openEntryRec').length) {
                        previewRec.next('.ajax-entry-rec').clone().addClass('openEntryRec').html(previewDataRec).insertAfter(previewRec.nextAll('.last:first')).wrapInner("<div class='on-hover-details1'></div>").height('auto').stop().css({
                            'margin-top': -1
                        }).slideDown(function () {
                            $('.openEntryRec').find('.pkg-similar-head').trigger("click");
                        });

                        $('.on-hover-details1').find('.iCheck-helper, .check').remove();
                        $('.openEntryRec').find('input[type=radio]').unwrap('.styled-radio')

                        $.scrollTo($(".openEntryRec"), 500, {
                            offset: -300
                        });
                        $('.openEntryRec').find('input[type=radio]').iCheck({
                            'radioClass': 'styled-radio',
                            'checkedClass': 'styled-radio-checked',
                            'insert': '<div class="check"></div>'
                        });
                    } else {}
                } else {
                    $('.openEntryRec').slideUp(function () {
                        $(this).remove()
                    });
                    $(this).removeClass('hovered active');
                }
            }
        });
    });

    $(document).delegate('.press-coverage .btn-close', 'click', function (evt) {
        $(this).parents(".openEntry").slideUp();
        $(".result-item").removeClass("active");
        evt.preventDefault();
    })
    /*$(window).trigger('resize');
        $('body').on('click', '.close', function() {
            $('.openEntry').slideUp(800).remove();
        });
        */
    $(window).trigger('resize');
});
/* 04/04/17 - Script for Listing Grid View Hover Effect */

$('.horizontaltab-reserv').responsiveTabs({
    startCollapsed: 'accordion',
    collapsible: 'accordion'
});


/*11May2018 start*/
$(".btn-expanddata").click(function (e) {
   
    $(".pkg-thumbnail").removeClass("active")
    $(this).closest(".activity-listing > li").find(".pkg-thumbnail").addClass("active");
    e.preventDefault();
    if (!$(this).hasClass('active')) {
        //$('#modalreadmore').parents('.readmore-drop').append("<div class='overlay-pop'></div>");/** 20Apr2018 starts **/

        $(this).addClass("active");
        /*$(".modal-type01").hide();  */
        //$("#modalreadmore").slideDown(); 

        if ($('.upgrade-room').length) {
            var ThisParent = $('#all ul.ajax-data').parent();
            var ThisListItem = $('#all ul.ajax-data > li');
        } else {
            var ThisParent = $('#pkg-listings.ajax-data');
            var ThisListItem = $('#pkg-listings.ajax-data > li');
        }



        if (!$(ThisListItem).hasClass('active')) {
            $(window).trigger('resize');
            $('.openEntry').slideUp();
            $('.hovered').removeClass('hovered active');
            $(this).addClass('hovered active');


            var preview = $(this).closest('.pkg-thumbnail').parent();
            var previewDataUrl = $(this).attr('href');
            var previewDataRel = $(this).attr('rel');

            $.ajax({
                    url: previewDataUrl,
                })
                .done(function (data) {

                    if (!$('.openEntry').length) {

                        if (preview.closest('#pkg-listings').hasClass('activity-listing')) {
                            preview.next('.ajax-entry').clone().addClass('openEntry').html(data).css({
                                "height": "auto"
                            }).insertAfter(preview.nextAll('.last:first')).stop().slideDown(function () {
                                $(this).removeClass('ajax-loading');
                                $.scrollTo($('.openEntry'), 500, {
                                    offset: -230
                                });
                                if ($('form').length) {
                                    initAjaxForms();
                                }
                            }).append('<div class="close-btn"></div>');
                        } else {
                            preview.next('.ajax-entry').clone().addClass('openEntry').html(data).css({
                                "height": "auto"
                            }).insertAfter(preview).stop().slideDown(function () {
                                $(this).removeClass('ajax-loading');
                                $.scrollTo($('.openEntry'), 500, {
                                    offset: -230
                                });
                                if ($('form').length) {
                                    initAjaxForms();
                                }
                            }).append('<div class="close-btn"></div>');
                        }

                    }

                    //#tab-extensions-sect

                    if ($('.exttabs.type2').length) {
                        $(".tab_content").hide();
                        $(".tab_content:first").show();
                        $("ul.tabs li a").click(function (e) {
                            e.preventDefault();
                            $(".tab_content").hide();
                            var activeTab = $(this).attr("href");
                            $(activeTab).fadeIn();

                            $("ul.tabs li a").removeClass("active");
                            $(this).addClass("active");

                            $(".tab_drawer_heading").removeClass("d_active");
                            $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
                        });
                        if (previewDataRel == 'itinerary-link') {
                            $(".exttabs a[href='#tab-itinerary-sec1']").trigger('click');
                        }
                        if (previewDataRel == 'inclusions-link') {
                            $(".exttabs a[href='#tab-inclusions-sec1']").trigger('click');
                        } else if (previewDataRel == 'hotels-link') {
                            $(".exttabs  a[href='#tab-hotels-sec1']").trigger('click');
                        } else if (previewDataRel == 'price-link') {
                            $(".exttabs  a[href='#tab-price-sec1']").trigger('click');
                        }
                        $(".tab_drawer_heading").click(function () {
                            $(".tab_content").hide();
                            var d_activeTab = $(this).attr("href");
                            $(d_activeTab).fadeIn();

                            $(".tab_drawer_heading").removeClass("d_active");
                            $(this).addClass("d_active");

                            $("ul.tabs li a").removeClass("active");
                            $("ul.tabs li a[href^='" + d_activeTab + "']").addClass("active");
                        });
                        $(".addon-pkg-cont .close-btn").click(function () {
                            $(this).parents(".openEntry").slideUp();
                            $(".btn-expanddata").removeClass("active");
                            $(".pkg-thumbnail").removeClass("active");
                        });

                    }
                    //                else {
                    //                    $('.exttabs').responsiveTabs({navigationContainer: '.prcs-list'});
                    //                }
                    if ($('.exttabs.HrzTab').length) {
                        $('.exttabs.HrzTab').responsiveTabs();
                    }
                    if (previewDataRel == 'inclusions-link') {
                        $(".exttabs .r-tabs-tab a[href='#tab-inclusions-sec1']").trigger('click');
                    } else if (previewDataRel == 'hotels-link') {
                        $(".exttabs .r-tabs-tab a[href='#tab-hotels-sec1']").trigger('click');
                    } else if (previewDataRel == 'price-link') {
                        $(".exttabs .r-tabs-tab a[href='#tab-price-sec1']").trigger('click');
                    } else if (previewDataRel == 'gallery-photos') {
                        $(".r-tabs-tab a[href='#tab-photos']").trigger('click');
                    }
                })
        } else {

        }


    }

});

$(document).delegate('.addon-services-cont .close-btn', 'click', function () {
    $(this).parents(".openEntry").slideUp();
    $(".btn-expanddata").removeClass("active");
    $(".pkg-thumbnail").removeClass("active");
});



$(function() {

$(window).on('resize', function() {
    //alert('hi');
    if($('.btn-expand-popup').length){
    $('.openEntry').remove();
    $('.ajax-entry').slideUp();
    $('#gallery-list > ul > li').removeClass('active-link');
    //var startPosX = $('.btn-expand-popup').parents('li').position().left;
    var startPosX = $('#gallery-list > ul > li').position().left;
    console.log(startPosX);
    $('.ajax-entry, li').removeClass("first last");
    $('.ajax-entry').each(function() {
        if ($(this).prev('li').position().left == startPosX) {
            $(this).prev('li').addClass("first");
            $(this).prevAll('.ajax-entry:first').addClass("last");
        }
    });
    $('.ajax-entry:last').addClass("last");
    }
    
});


//$('.btn-expand-popup').each(function(){
$('#gallery-list > ul > li').each(function(){
  var TargetList = $(this);
    $("<li class='ajax-entry ajax-loading'></li>").insertAfter($(this)).hide();

    $(this).find('.btn-expand-popup').click(function(evt) {
        evt.preventDefault();
        $(window).trigger('resize');
        var url = $(this).attr('href');
        //var $thisData = $(this).attr('href');
        $('.openEntry').slideUp();
       $('#gallery-list > ul > li').removeClass('active-link');
        
        $(this).closest('li').addClass('active-link');
        var preview = $(this).closest('li');
        $.scrollTo($(this), 500, {offset :-300});
    $.ajax({
		url: url,
		})
		.done(function( data ) {
        if(!$('.openEntry').length){
            preview.next('.ajax-entry').clone().addClass('openEntry').html(data).css({"height":"auto"}).insertAfter(preview.nextAll('.last:first')).stop().slideDown(function(){$(this).removeClass('ajax-loading')}).append('<div class="close-btn"></div>');
        }
        else{
              $('.openEntry').slideUp().remove();
            preview.next('.ajax-entry').clone().addClass('openEntry').html(data).css({"height":"auto"}).insertAfter(preview.nextAll('.last:first')).stop().slideDown().removeClass('ajax-loading').append('<div class="close-btn"></div>');
        }    
    });
});
});
})


$(document).on('click','.ajax-entry.openEntry .close-btn',function(evt) {
    $('.openEntry').slideUp().remove();
    $('#gallery-list > ul > li').removeClass('active-link');
});

/** Drag & Drop **/
var DragDropHotel = function () {
    $(".draggable-sect > li").draggable({
        appendTo: ".wrapper",
        helper: function () {
            var helper = $(this).clone();
            // jquery.ui.sortable will override width of class unless we set the style explicitly.
            //alert($(this).width()+"++++"+$(this).height());
            helper.css({
                'width': $(this).width(),
                'height': $(this).height()
            });
            return helper;
        },
        addClasses: false,
        cursor: 'move'
    });
    $(".droppable-sect").droppable({
        addClasses: false,
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        accept: ":not(.dragged)",
        drop: function (event, ui) {
            $('.changehotelsec-lt-panel').find('.dragged').removeClass('dragged');
            ui.draggable.addClass('dragged');
            var HotelTitle = ui.draggable.find('.img-caption').text();
            var HotelRating = ui.draggable.find('.star-rating').attr('class');

            //alert(HotelTitle+"====="+HotelRating);

            $(this).closest('.schedule-slot').find('.iti-tl').find('b').text(HotelTitle);
            $(this).closest('.schedule-slot').find('.star-rating').attr({
                'class': HotelRating
            });

            var OldPrcFigure = $('.price .total-amt').text().replace(",", ""),
                AddPrcFigure = ui.draggable.find('.txt-uprgrd-btn b > span').text().replace(",", "").replace("*", "");
            //alert(OldPrcFigure);
            var NewPrcFigure = addnumbers(OldPrcFigure, AddPrcFigure);

            $('.total-amt').text(NewPrcFigure).digits().parent().addClass('pr-updated');
            $('.undo-redo-opt').show();

        }
    });
};



function addnumbers(OldPrcFigure, AddPrcFigure) {
    var sumprice = Number(OldPrcFigure) + Number(AddPrcFigure);
    return sumprice;
}
/** Price Digits Number **/
$.fn.digits = function () {
    return this.each(function () {
        $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
}


$(document).on('click', '.ajax-btn', function (evt) {
    evt.preventDefault();
    if ($('.droppable-sect').length) {
        $('.droppable-sect').droppable("destroy").removeClass('droppable-sect');
    }
    $(this).addClass('disabled').closest('.schedule-slot').addClass('selected').children(0).addClass('droppable-sect');
   

    if (!$(this).attr('data-rel') == '') {
        //var url = '../static/customised-trip/'+$(this).attr("rel")+'.shtml';
        var ClickTarget = '.' + $(this).attr("data-rel");

        $("#lt-panels > div").not(ClickTarget).hide();
        $(ClickTarget).show();
        ImgFit = $('.img-fit');
        /*	if(ImgFit.length){initImgFit();}*/
        if ($('.owl-carousel').length) {
            var owl = $('.owl-carousel');
            var owlInstance = owl.data('owlCarousel');
            if (owlInstance != null) owlInstance.reinit();
        }
        $(window).animate({
            scrollTop: ($(ClickTarget).offset().top - 180)
        }, 500);
        //Detail Section Tab
        if (ClickTarget == '.activities-details-lt-panel') {
            //alert('ActivityDetailSectionTabs');
            $('#ActivityDetailSectionTabs').responsiveTabs();
            $('#Activitytab-01').responsiveTabs();
            $('#Activitytab-02').responsiveTabs();
        }
        if (ClickTarget == '.transfer-details-lt-panel') {
            //alert('TransferDetailSectionTabs');
            $('#TransferDetailSectionTabs').responsiveTabs();
            $('#Transfertab-01').responsiveTabs();
            $('#Transfertab-02').responsiveTabs();
        }
        if (ClickTarget == '.hotel-details-lt-panel') {
            $('#HotelDetailSectionTabs').responsiveTabs();
            $('#Hoteltab-01').responsiveTabs();
            $('#Hoteltab-02').responsiveTabs();
            if ($('.owl-carousel').length) {
                var owl = $('.owl-carousel');
                var owlInstance = owl.data('owlCarousel');
                if (owlInstance != null) owlInstance.reinit();
            }
        }
        
        if (ClickTarget == '.optional-details-lt-panel') {
            $('#OptionalDetailSectionTabs').responsiveTabs();
            $('#Optional-01').responsiveTabs();
            if ($('.owl-carousel').length) {
                var owl = $('.owl-carousel');
                var owlInstance = owl.data('owlCarousel');
                if (owlInstance != null) owlInstance.reinit();
            }
        }
    } else {
       
        $("#lt-panels > div").fadeOut();
        $(".itinerary-lt-panel").fadeIn();
        

    };

});

/*Add/change hotel and activities*/
$(".lft-panel .change-hotel-sec .listing-sec li.ui-draggable-handle .btn-change-hotel").click(function () {
    $('.lft-panl.hotel-details-lt-panel').addClass('change-hotel');
});
$(".add-activities-sec .transfer-listing-content  .btn-change-hotel").click(function () {
    $('.lft-panl.activities-details-lt-panel').addClass('add-activities');
});


$('.select-size li a').click(function(){
   $(this).toggleClass('selected');
    $(this).parent('li').siblings('li').find('a').removeClass('selected');
});

$('.select-color li a').click(function(){
   $(this).toggleClass('selected');
    $(this).parent('li').siblings('li').find('a').removeClass('selected');
});

$('.products-carousel .product-info').click(function(){
    $(this).addClass('selected');
   $(this).siblings('.product-info-selection').fadeIn(); 
});

$('.product-info-selection .close-btn').click(function(){
    $(this).parents('.product-info-selection').siblings('.product-info').removeClass('selected');
   $(this).parents('.product-info-selection').fadeOut(); 
    return false;
});

$('.top-search-box .search-btn').click(function(){
    $(this).parent('.top-search-box').addClass('open');
});

$('.top-search-box .search-close-btn').click(function(){
    $(this).parent('.top-search-box').removeClass('open');
});

$('.image-link').magnificPopup({type:'image'});


var initTabOverview = function() {
    if(!$('#tab-overview-sect').hasClass('r-tabs-state-active')){
        $('.golf-courses-tab, .trip-btm-packages, .products-carousel-wrap').hide();
        $('.slider-content').show();
    }else{
        $('.golf-courses-tab, .trip-btm-packages, .products-carousel-wrap').show();
        $('.slider-content').hide();
    }
}

/* Header After Scroll :Start */
$(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop()>10){
			$('header, .back-btn-wrap').addClass('header-sm');
		} 
		else{
			$('header, .back-btn-wrap').removeClass('header-sm');
		}
	});
});
/* Header After Scroll :Start */


$('.other-package figcaption .btn-primary').click(function(e) {
    e.preventDefault();
    if(!$(this).hasClass('selected')){
        $(this).parents('.other-package').find('.btn-primary').text('Select');
        $(this).parents('.other-package').find('.btn-primary').removeClass('selected');
        $(this).text('Selected');
        $(this).addClass('selected');
    }else{        
        $(this).text('Select');
        $(this).removeClass('selected');
    }
});
    
 /**float box mob popup**/
if (window.matchMedia('(max-width: 767px)').matches) {
$('.popup-box').addClass('mfp-hide');
$(document).on('click','.pop-list', function() {
    var targetDiv = $(this).attr("href");
    $.magnificPopup.open({
        type:'inline',
        items:{ src : targetDiv},
        fixedContentPos:true,
        fixedBgPos:true,
        overflowY:'auto',
        closeBtnInside:true,
        preloader:false,
        midClick:true,
        removalDelay:300,
        mainClass:'my-mfp-slide-bottom'
    });
});
}else{
    $('.Float-box').hide();
}

// ======== Customize Trip Modal start ======== //
$("#btnCustomizeTrip,.btnCustomizeTrip").click(function(e){
    e.preventDefault();
    if(!$(this).hasClass('active')){
		$(this).parents('body').append("<div class='overlay-pop'></div>");
		$('body').addClass('no-scroll');
        $(this).addClass("active");        
        $(".modal-type01").hide();    
        $("#modalCustomizeTrip").slideDown();
    }
});

$(".modal-type01 .button-close").click(function(e){
    $(".modal-type01").slideUp();  
    e.preventDefault();    
    $(this).parents(".right-section").find(".btn").removeClass("active");
    $(".trip-edit").removeClass("active");
	$(this).parents('body').find(".overlay-pop").remove();
	$('body').removeClass('no-scroll');
});
/*12NOv2018 start*/
$(".pkg-bar .right-section .btnCustomizeTrip#proceed").click(function(){
   $('#modalCustomizeTrip #btn-customize').hide();
   $('#modalCustomizeTrip #btn-proceed').show();
  
});
$(".pkg-bar .right-section .btnCustomizeTrip#customize").click(function(){
   $('#modalCustomizeTrip #btn-proceed').hide();
   $('#modalCustomizeTrip #btn-customize').show();
  
});
/*12NOv2018 end*/
// ======== Customize Trip Modal End ======== //    
    
$("#modalCustomizeTrip").each(function(){
    var soloForm = $(this).find('.form-solo'),
        pasngrForm = $(this).find('.form-pasngr'),
        count = $("#modalCustomizeTrip").children('.clonede').length;
    

    $(this).find(".action-btn-cont a.btn-solo").click(function() {
        //count++;
        $('.action-btn-cont a.add-btn').show();
        $(this).parents('.popup-box').find('.button-container').show(); 
        var cloned = $(soloForm).clone();
        
        cloned.appendTo('#modalCustomizeTrip .pax-frm-wrap').show().addClass('clonede');
        cloned.find('.srNum').append($("#modalCustomizeTrip").find('.clonede').length);
        cloned.find('.srNum').append(remove_row);
        
        $('.clonede').find('.iCheck-helper, .check').remove();
        $('.clonede').find('input[type=radio]').unwrap('.styled-radio');
        
        $('.clonede').find('input[type=radio]').iCheck({
            'radioClass': 'styled-radio',
            'checkedClass': 'styled-radio-checked',
            'insert': '<div class="check"></div>'
        });         
        $('.clonede').find('input[type=checkbox]').iCheck({
            'checkboxClass': 'styled-checkbox',
            'checkedClass': 'styled-checkbox-checked',
            'insert': '<div class="check"></div>'
        });
    });

    $(this).find(".action-btn-cont a.btn-pasngr").click(function() {
        //count++;
        $('.action-btn-cont a.add-btn').show();
         $('.frm-pax-dtls > .button-container').show(); 
        var cloned = $(pasngrForm).clone();   
        cloned.appendTo('#modalCustomizeTrip .pax-frm-wrap').show().addClass('clonede');
        cloned.find('.srNum').append($("#modalCustomizeTrip").find('.clonede').length);
        cloned.find('.srNum').append(remove_row);
       
    });

    $('body').on('click', '.close-btn', function(){
        $(this).parent('.form-box').hide();
        $(this).parent('.form-box').next('.form-box').find('.srNum').append($("#modalBookNow").find('.clonede').next('.clonede').length-1);
    });
});

var initFixedPkgBar = function () {
    var fixedmidsec = $('.top-mid-sec'),
        tpHeader = $('.top-header').outerHeight();
        DivOffset = fixedmidsec.offset().top - tpHeader, //27Jul2018
        pkgBarHgt = $('.inner-top-strip').outerHeight(); // 08may2018
    $(window).scroll(function () {
        if ($(this).scrollTop() > DivOffset) {
            $('.inner-top-strip').addClass('fixedpos');
            $('.inner-top-strip').css({'top':tpHeader}); // 08may2018
            $('.inner-top-strip').parent('.top-mid-sec').css({'min-height': pkgBarHgt}); // 08may2018
        } else {
            $('.inner-top-strip').removeClass('fixedpos');
            $('.inner-top-strip').css({'top': 'auto'}); // 08may2018
            $('.inner-top-strip').parent('.top-mid-sec').css({'min-height': 'inherit'}); // 08may2018
        }
    });
}

/* Popup : Starts */
$(document).on('click', '.popup-inline', function (event) {
    var targetDiv = $(this).attr("href");
    event.preventDefault();
    $.magnificPopup.open({
        type: 'inline',
        items: {
            src: targetDiv
        },
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });
    $('.toggle-checkbox').bootstrapSwitch({
        state: true
    });
});
/* Popup : Ends */




/** required Fields Focus 30Oct2018 Start**/
var initCustomField = function(){
	$('.custom-field').each(function(){    
        
		var $this = $(this), 
            ReqHolder = $this.find('.holder'), 
            thisText = $this.find('input, textarea,.textarea, button').val(), 
            thisfield = $this.find("input, textarea,.textarea, button");
    
		// initialisation
		if(thisText.length){ReqHolder.fadeOut();
                          
            }
		else{ReqHolder.fadeIn();}
		//focus
		thisfield.focus(function(){ReqHolder.fadeOut();$(".search-sec .widget-form-elements > li.tags-where .error-widget").hide(); 
             $(".InputCustomDatepicker .error-widget").hide();}).focusout(function(){
			if($this.find('input, textarea, button').val().length){
                 
            ReqHolder.fadeOut(); 
               
            }
			else{ReqHolder.fadeIn();
                 
                }
		});
		
	});	
}
/** required Fields Focus **/


/*---------- Enquiry Form 30Oct2018 Start ----------*/

 $('.cust-prvt-journy').on('click', function(){
    $('.cust-prvt-journy-sec').show();
    $('.group-trip-sec').hide();
    $('.tour-guides').show();    
  });
   $('.group-trip').on('click', function(){
    $('.cust-prvt-journy-sec').hide();
    $('.group-trip-sec').show();
    $('.tour-guides').hide();
  });

$('.plan-stage input:radio').on('ifChanged', function(event){  
    if($(this).hasClass('ready-to-book')){
        $(this).parents('.plan-stage').find('.multiple-boxes').show();                   
    }
    else{
        $(this).parents('.plan-stage').find('.multiple-boxes').hide();                   
    }
});

$('.rd-group-book input:radio').on('ifChanged', function(event){  
    if($(this).hasClass('specific-date')){
        $(this).parents('.rd-group-book').find('.specfc-dt').find('.input-append').removeClass('disabled');   
        $(this).parents('.rd-group-book').find('.specfc-dt').find('.input-append > input').removeAttr('disabled');  
        $(this).parents('.rd-group-book').find('.specfc-dt').find('.input-append > button').removeAttr('disabled');  
        $(this).parents('.rd-group-book').find('.specfc-dt').find('span.addon').removeClass('disabled');  
    }
    else{
        $(this).parents('.rd-group-book').find('.specfc-dt').find('.input-append').addClass('disabled');   
        $(this).parents('.rd-group-book').find('.specfc-dt').find('.input-append > input').attr('disabled', 'disabled');  
        $(this).parents('.rd-group-book').find('.specfc-dt').find('.input-append > button').attr('disabled', 'disabled');  
        $(this).parents('.rd-group-book').find('.specfc-dt').find('span.addon').addClass('disabled');                    
    };
    if($(this).hasClass('rd-within')){       
         $(this).parents('.rd-group-book').find('.within-days').find('.input-days').removeClass('disabled');
         $(this).parents('.rd-group-book').find('.within-days').find('.cust-spinner').removeClass('disabled');                  
    }
    else{
        $(this).parents('.rd-group-book').find('.within-days').find('.input-days').addClass('disabled');
        $(this).parents('.rd-group-book').find('.within-days').find('.cust-spinner').addClass('disabled');                  
    }
});

$('.hotel-membership').on('ifChecked', function(){
    $('.membership-dtls').show();
});
$('.hotel-membership').on('ifUnchecked', function(){
    $('.membership-dtls').hide();
});

$('.trvl input:radio').on('ifChanged', function(event){   
    if($(this).hasClass('grp-trp')){
         $(this).closest('ul').siblings('.group-trip-sec').removeClass('disabled');
         $(this).closest('ul').siblings('.group-trip-sec').find('input').removeAttr('disabled'); 
         $(this).closest('ul').siblings('.group-trip-sec').find('.styled-radio').removeClass('disabled');                    
    }
    else{
        $(this).closest('ul').siblings('.group-trip-sec').addClass('disabled');
        $(this).closest('ul').siblings('.group-trip-sec input').attr('disabled', 'disabled');                                       
    }

});

/* Popup : Starts */
$(document).on('click','.snd-enq-btn', function(event) {
    var targetDiv = '#request-info-popup';
    event.preventDefault();
    $.magnificPopup.open({
	type:'inline',
   items:{ src : targetDiv},
	fixedContentPos:true,
	fixedBgPos:true,
	overflowY:'auto',
	closeBtnInside:true,
	preloader:false,
	midClick:true,
	removalDelay:300,
	mainClass:'my-mfp-slide-bottom'
});
});
/* Popup : Ends */

/*---------- Custom file upload Start ----------*/
$('#chooseFile').bind('change', function () {
    var filename = $("#chooseFile").val();
    if (/^\s*$/.test(filename)) {
        $(".file-upload").removeClass('active');
        $("#noFile").text("Upload file");
    } else {
        $(".file-upload").addClass('active');
        $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
    }
});
/*---------- Custom file upload End ----------*/

$("#slider-intensity").slider({
    ticks: [0, 1, 2, 3, 4, 5],
    value: 0,
    ticks_labels: ['','<span class="holiday-easy">Easy &amp; Relaxed</span>', '<span class="holiday-moderate">Moderate</span>', '<span class="holiday-active">Quite Active</span>', '<span class="holiday-packed">Packed! I want to see everything!</span>','']
})
/*---------- Enquiry Form End ----------*/
/*22-jan-2019*/
$('.popup-youtube').magnificPopup({type:'iframe'});
/*22-jan-2019*/

/******* New Filter panel start ***/
$('.filter-pannel-cont > ul > li > a').click(function(e){
    $('.filter-pannel-cont > ul > li > a').removeClass('active');
    $(this).addClass('active');
    var dataLabel = $(this).attr('data-label');
    $('.filter-pannel-cont .filter-data').hide()
    $(".filter-pannel-cont .tab-"+dataLabel+"-sect").show()    
    e.preventDefault();
})
$('.lnk-close').click(function(e){
    $('.filter-data').hide();
    $('.filter-pannel-cont > ul > li > a').removeClass('active');
    e.preventDefault();
})

var chkCount=0;
$('.filter-pannel-cont .chk-list > li  input').on('ifChanged', function(event) {    
    if($(this).prop("checked") == true){
        $(this).parents('.filter-data').find('.btn-clear-cont').show();
        $(this).parents('.filter-data').find('.btn-clear-cont a').removeClass('disable-click');
        chkCount+=1;
            if($('.fitler-selections').parent('.sort-top-sec').hasClass('type-02')){
                if($(window).width() > 767){
                    $('.fitler-selections').css('display','table-cell');
                }else{                    
                    $('.fitler-selections').show();
                }
            }else{
                $('.fitler-selections').show();
            }
    }
    else{
        chkCount-=1;
        if(chkCount == 0){
            $('.fitler-selections').hide();
            $(this).parents('.filter-data').find('.btn-clear-cont a').addClass('disable-click');
        }
    }
    $(this).closest('li').children('ul').toggle();    
    
});
$('.btn-clear-cont > a').click(function(e){
    e.preventDefault();    
    $(this).parents('.fitler-data').find('input').removeAttr('checked');
})
$(function(){
    if($(window).width() < 991){
        //$('.filter-pannel-cont > ul > li:first-child > a').addClass('active');
        //$('.filter-data-cont > .filter-data:first-child').show();
        $('.search-filter-list').hide();
    }
});

/*Duration Slider :: Sratrs*/
$(".DurationSlider").slider({tooltip: 'hide'});
$(".DurationSlider").on("slide", function(slideEvt) {
	$(".Duration-1-slider").text(slideEvt.value[0]);
	$(".Duration-2-slider").text(slideEvt.value[1]);
});
/*Duration Slider :: Ends*/


/*Price Slider :: Starts*/
$(".priceSlider").slider({tooltip: 'hide'});
$(".priceSlider").on("slide", function(slideEvt) {
	$(".price-1-slider").text(slideEvt.value[0]);
	$(".price-2-slider").text(slideEvt.value[1]);
});
/*Price Slider :: Ends*/
/******* New Filter panel End ***/

var initClnListing = function(e) {
$(function() {

$(window).on('resize', function() {
    if($('.cln-listings').length){
        $('.cln-listings').each(function(){
            //alert('new pkg listings found');
            $('.openEntry').remove();
            $('.ajax-entry').hide();
            $('.cln-listings > li').removeClass('hovered active');

            var startPosXRec= $(this).find('li:first').position().left;
            $(this).find('.ajax-entry, li').removeClass("first last");
            $(this).find('.ajax-entry').each(function() {
                if ($(this).prev('li').position().left == startPosXRec) {
                    $(this).prev('li').addClass("first");
                    $(this).prevAll('.ajax-entry:first').addClass("last");
                }
            });
            $(this).find('.ajax-entry:last').addClass("last");
        });
    }
});
    
/* NEW PKG Listings :: Start */
$('.cln-listings > li').each(function(){
    var $thisData = $(this).parents('li').html();
    var $this = $(this);
    var OffsetHeader = -($('header').height()+175);
    $("<li class='ajax-entry list-view col-md-12'></li>").insertAfter(this);

    $(this).find('.btn_readmore').on('click',function(evt) {
        evt.preventDefault()
        //alert(0);
        if($('.cln-listings').hasClass('grid-view')){
            if(!$(this).parents('li').hasClass('active')){
                //alert(1);
                $(window).trigger('resize');
                $('.openEntry').slideUp();
                $('.hovered').removeClass('hovered active');
                $(this).parents('li').addClass('hovered active');

                var preview = $(this).parents('li');
                var previewData = $(this).parents('li').html();
                if(!$('.openEntry').length){
                    //alert(2);
                    preview.next('.ajax-entry').clone().addClass('openEntry').html(previewData).insertAfter(preview.nextAll('.last:first')).height('auto').stop().slideDown(function(){
                        $('.openEntry').find('.pkg-similar-head').trigger( "click" );
                    });
                    $('.pkg-thumbnail').find('.iCheck-helper, .check, .bootstrap-select').remove();
                    $('.openEntry').find('input[type=radio]').unwrap('.styled-radio');
                    $('.openEntry').find('select').unwrap('.styled-select');

                    $.scrollTo($(".openEntry"), 700, {offset :OffsetHeader});
                    $('.openEntry').find('input[type=radio]').iCheck({'radioClass': 'styled-radio','checkedClass': 'styled-radio-checked','insert': '<div class="check"></div>'});
                    var allSelects = $('.openEntry').find('select'); 
                    allSelects.each(function(){

                        // not for IE7
                        if(!isIE7){
                            var $this = $(this),
                                wrap = $('<div />', {
                                    'class':	'styled-select'
                                });

                            // wrap
                            $this.wrap(wrap);

                            // invoke bootstrap-select plugin

                            $this.selectpicker({
                                'showIcon':	true,
                                'dropupAuto':	false,
                                'showSubtext' :true,
                                'showContent' :true
                            });

                            if (window.PIE) {$('.form-group .styled-select .btn-group .btn').each(function() {PIE.attach(this);});} 	
                        }
                     });
                
                    $('.openEntry').find('.btn-close').click(function(e){
                        e.preventDefault();
                        $(this).parents('.openEntry').remove();
                        $this.parents('ul').find('li').removeClass('hovered active');
                    });
                }
                else{}
            }   
            else{
                $('.openEntry').animate({'height':0},700, function(){
                    $(this).remove();
                    $this.removeClass('hovered active');
                });
            }
        } 
        else{}
    });
    
});
/* NEW PKG Listings :: End */   

$(window).trigger('resize');
});
}

/* Currency :Starts */
$('.sub-menu.currency li a').on('click',function(){
    $('.sub-menu.currency li a').removeClass('fwtb');
    $('.sub-menu.currency li a .curTick').removeClass('fa fa-check');
    $(this).addClass('fwtb');
    $(this).find('.curTick').addClass('fa fa-check');
    var ccode = $(this).attr('data-contryname');
    var currencycode = $(this).attr('data-contrycurrency');
    //var menuhtml="";
    menuhtml = ccode;
    $('.currency-main-menu').html(menuhtml);
});
/* Currency :Ends */

/* Nav More :Starts */
/*$('.nav-more .nav-link').on('click',function(e){
    e.preventDefault();
    if(!$(this).hasClass('active')){
        var navLink = $(this);
        var position = navLink.offset();
    
        $(this).addClass('active');
        $(this).parent().addClass('show');
        $(this).parents('.nav').find('#nav-more').addClass('show').css({'left':position.left, 'top':position.top - $(this).offset().top});
        $(this).parents('.nav').find('#nav-more').children('.dropdown-menu').addClass('show open');

        $(document.body).on('click.nav-link', function(){
            var $body = $(this);

            $body.off('click.nav-link');
        });
    }else{
        $(this).removeClass('active');
        $(this).parent().removeClass('show');
        $(this).parents('.nav').find('#nav-more').removeClass('show').css({'left':position.left, 'top':position.top - $(this).offset().top});
        $(this).parents('.nav').find('#nav-more').children('.dropdown-menu').removeClass('show open');
    }
});*//*29-01-2019*/

$('.nav-item .nav-link').parent('li:has(> ul)').addClass('hasDRP');

$('.nav-item .nav-link').on('click',function(e){
    if($(this).parents('li').hasClass('hasDRP')){
        e.preventDefault();
        if(!$(this).hasClass('active')){
                var navLink = $(this);
                var navLinkHeight = $(this).outerHeight();

                var offset = $(this).parents('.nav').offset();
                var relativeX = (e.pageX - offset.left);
                var relativeY = (e.pageY - offset.top) + navLinkHeight*2 - 25;

                if($(this).parents('li').hasClass('hasDRP')){
                    var LIpositionDrp = $(this).parents('li').find('.dropdown-menu').html();

                    //alert("X: " + relativeX + "  Y: " + relativeY);

                    $(this).parents('.nav').find('.active').removeClass('active');
                    $(this).parents('.nav').find('.show').removeClass('show');
                    $(this).parents('.nav').next('.nav-more').remove();
                    $(this).parents('.nav').next('.nav-more').removeClass('show').css({'top':relativeY});
                    $(this).parents('.nav').next('.nav-more').children('.dropdown-menu').removeClass('show open');

                    $(this).addClass('active');
                    $(this).parent().addClass('show');

                    $(this).parents('.nav').after('<div class="nav-more more-dropdown nav show open"><ul class="dropdown-menu show open">'+LIpositionDrp+'</ul></div>');
                    $(this).parents('.nav').next('.nav-more').addClass('show').css({'top':relativeY});
                    $(this).parents('.nav').next('.nav-more').children('.dropdown-menu').addClass('show open');
                    $(this).next('.dropdown-menu').remove('show open');
                }
                else{
                    $(this).parents('.nav').find('.active').removeClass('active');
                    $(this).parents('.nav').find('.show').removeClass('show');
                    $(this).parents('.nav').next('.nav-more').remove();
                    $(this).parents('.nav').next('.nav-more').removeClass('show').css({'top':relativeY});
                    $(this).parents('.nav').next('.nav-more').children('.dropdown-menu').removeClass('show open');
                }
        }else{
            $(this).removeClass('active');
            $(this).parent().removeClass('show');
            $(this).parents('.nav').next('.nav-more').remove();
            $(this).parents('.nav').next('.nav-more').removeClass('show').css({'top':relativeY});
            $(this).parents('.nav').next('.nav-more').children('.dropdown-menu').removeClass('show open');
        }
    }else{
        $(this).removeClass('active');
        $(this).parent().removeClass('show');
        $(this).parents('.nav').next('.nav-more').remove();
        $(this).parents('.nav').next('.nav-more').removeClass('show').css({'top':relativeY});
        $(this).parents('.nav').next('.nav-more').children('.dropdown-menu').removeClass('show open');
		
        /*09-03-2019*/
        if(!Modernizr.mq(mq_green)){
            //alert('Mobile Note Found');
        }
        else{
            //alert('Mobile Found');
            $(this).parents('.navigation-wrap').removeClass('open');
            $(this).parents('.navigation-wrap').find('.toggleMenu').removeClass('active');
        }
        /*09-03-2019*/
    }
});
/* Nav More :Ends */

/*Custom Scrollbar : Starts */
var initNavigationBar = function() {
    $('.navigation-wrap').each(function(){
        var NavigationBarHeight = $(window).height(),
            NavHeight = NavigationBarHeight - $(this).find('.logo-wrap').outerHeight();
        $(this).find('.nav').css('height',NavHeight);
    });
}
var initSimpleScrollBar = function() {
    initNavigationBar();
    //$('.navigation-wrap > .nav').simplebar();
    
    // $('.navigation-wrap > .nav').mCustomScrollbar({
    //     autoHideScrollbar: true,
    //     scrollButtons:{
    //         enable:true
    //     },
    //     advanced:{
    //         updateOnBrowserResize:true,
    //         updateOnContentResize:false, 
    //         autoExpandHorizontalScroll:false,
    //         autoScrollOnFocus:true
    //     }
    // });
    
}
/*Custom Scrollbar : Ends */

/*Custom Scrollbar : Ends */
var initInnerPageContent = function() {
    $('.inner-page-content').each(function(){
        var headerHeight = $(this).parents('body').find('.top-header').outerHeight();
     //   $(this).css({paddingTop:headerHeight})
    });
}
/*Custom Scrollbar : Ends */

/** 12-02-2019 **/
/** required Fields Focus **/
var initCustomField = function(){
	$('.custom-field').each(function(){    
		var $this = $(this), 
            ReqHolder = $this.find('.holder'), 
            thisText = $this.find('input, textarea,.textarea, button').val(), 
            thisfield = $this.find("input, textarea,.textarea, button");
    
		// initialisation
		if(thisText.length){ReqHolder.fadeOut();}
		else{ReqHolder.fadeIn();}
		//focus
		thisfield.focus(function(){ReqHolder.fadeOut();$(".search-sec .widget-form-elements > li.tags-where .error-widget").hide(); 
             $(".InputCustomDatepicker .error-widget").hide();}).focusout(function(){
			if($this.find('input, textarea, button').val().length){
                 
            ReqHolder.fadeOut(); 
               
            }
			else{ReqHolder.fadeIn();
                 
                }
		});
		
	});	
}
/** required Fields Focus **/

$('.form-des-element').click(function(e){
    e.preventDefault();
    $(this).closest('ul').find('.form-des-details').hide();
    $(this).closest('li').find('.form-des-details').show();
    $(this).toggleClass("active")
    /*$(this).closest('li').find(".InputCustomDatepicker").addClass("active");*/
}); 

$(document).mouseup(function (e){
    var container = $(".form-des-details");    
    if (!container.is(e.target) 
        && container.has(e.target).length === 0) 
    {		
        container.hide();
        $(".InputCustomDatepicker").removeClass("active");
        $(".form-des-element").removeClass("active")
    }
});
/** 12-02-2019 **/

/** 15-02-2019 **/
var initReadMore = function(){      
	var ellipsestext = "...";
	$('.icon-nav-list .item a em').each(function() {
          //var showChar = $(this).attr('data-count');
          var showChar = 10;
		  var content = $(this).text();
		if(content.length > showChar) {
			var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);
			var html = c + '<em class="moreellipses">' + ellipsestext+ '</em>';
			$(this).html(html);
		}
	});
}
/** 15-02-2019 **/

$(document).on("click",".share-tooltip a", function(e) {
    e.preventDefault();	
    $(this).parents('.inner-page-content').addClass('share-trigged');
});

$("#btnCustomizeTrip,.btnCustomizeTrip").click(function(e){
    $(this).parents('.inner-page-content').removeClass('share-trigged');
});

/*25Feb2019 Tel disabled*/
/*disable href="tel:" in desktop*/
if (navigator.userAgent.match(/(iPhone|Android|BlackBerry)/)) {
	//this is the phone

} else if (navigator.userAgent.match(/(iPod|iPad)/)) {
	$('a[href^=tel]').click(function (e) {

	});
} else {
	//this is the browser

	$('a[href^=tel]').click(function (e) {
		e.preventDefault();
	});
	$('a[href^=tel]').addClass('tel-disabled')
}

/*disable href="tel:" in desktop*/

/****27-02-2019****/
$('.email-lnk').on('click', function(event) {
	var targetDiv = '#email-itinerary';
        $('.send-enquiry-popup').hide();
        $('.email-itinerary').show();
        event.preventDefault();
        $.magnificPopup.open({
            type:'inline',
            items:{ src : targetDiv},
            fixedContentPos:true,
            fixedBgPos:true,
            overflowY:'auto',
            closeBtnInside:true,
            preloader:false,
            midClick:true,
            removalDelay:300,
            mainClass:'my-mfp-slide-bottom',  
        });
	$('.email-frm').show();
	$('.itinerary-submited').hide();
});

$('.btn-send').on('click', function(e) {
	e.preventDefault();
	$('.email-frm').hide();
	$('.itinerary-submited').show();
});

$('.btn-close').on('click', function(e){
	e.preventDefault();
	$.magnificPopup.close();
});

/* Share Custom Functionality : Starts */
$(document).on("click",".share-tooltip a", function(e) {
    e.preventDefault();	
    $(".share-tooltip a, .tool-tip.info a").removeClass("active");
    $('.share-collapse, .tooltip-cont').hide();
    $('.pkg-listing > li').css({'z-index':'0'});	
    $(this).parents('li').css({'z-index':'1'});
    $(this).parent().find('.share-collapse').show();
    var containerPos = $(this).parents('.container').offset().left;
    var containerWdth = $(this).parents('.container').outerWidth();
    var ContPos = $(this).closest('.share-tooltip').children('.share-collapse').offset().left;
    var ContWdth=$(this).closest('.share-tooltip').children('.share-collapse').outerWidth();
    var pos=ContPos-containerPos;
    var totWdth=pos+ContWdth;
    var margin=totWdth-containerWdth+30;
    if(totWdth>containerWdth){
        $(this).closest('.share-tooltip').children('.share-collapse').offset({left:ContPos-margin});}
    var isMobile = window.matchMedia("only screen and (max-width: 767px)");
    if (isMobile.matches) {
        $(this).closest('.share-tooltip').children('.share-collapse').offset({left:ContPos-margin});}
    $(this).toggleClass("active");
    e.stopPropagation();
});
/* Share Custom Functionality : Ends */
/****27-02-2019****/



(function () {
  'use strict';
  document.documentElement.className = 'fallback';
  var css_href = 'https://fonts.googleapis.com/css?family=Inria+Serif:300,300i,400,400i,700,700i&display=swap';
  var localStorageSupported = function() {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
    } catch(e) {
      return false;
    }
  }

  if (localStorageSupported() && localStorage.spdemowebFonts) {
    injectRawStyle(localStorage.getItem('spdemowebFonts'));
  } else {
    window.onload = function() {
      injectFontsStylesheet();
    }
  }

  function injectFontsStylesheet() {
    var xhr = new XMLHttpRequest();
      xhr.open('GET', css_href, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          injectRawStyle(xhr.responseText);
          localStorage.setItem('spdemowebFonts', xhr.responseText);
        }
      }
    xhr.send();
  }

  function injectRawStyle(text) {
    var style = document.createElement('style');
    style.innerHTML = text;
    document.getElementsByTagName('head')[0].appendChild(style);
    document.documentElement.className = 'webFont';
  }
}());

$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
            //return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            return item.el.find('.pkg-tl').text();
        }
    }
});