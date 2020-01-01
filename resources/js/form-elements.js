/* Initialisers
-------------------------------*/
forms = $('form, .form');
isIE7 = $('html').hasClass('ie7');
isIE8 = $('html').hasClass('ie8');
touchEnabled = Modernizr.touch;		
formPlaceholders = Modernizr.input.placeholder;
boxShadows = Modernizr.boxshadow;


	//////////////////////
	// initalises forms, standardises cross-device behaviours
	//////////////////////
	function initForms(){
		forms.each(function(){
			var $this = $(this),
				allInputs = $this.find('input'),
				allSelects = $this.find('select'),
				checkboxInputs = $this.find('input[type="checkbox"]'),
				radioInputs = $this.find('input[type="radio"]');
			
			// apply custom iCheck styles to checkboxes
			checkboxInputs.iCheck({
				'checkboxClass': 	'styled-checkbox',
				'checkedClass': 	'styled-checkbox-checked',
				'insert':			'<div class="check"></div>'
			});

			// apply custom iCheck styles to radios
			radioInputs.iCheck({
				'radioClass':		'styled-radio',
				'checkedClass': 	'styled-radio-checked',
				'insert':			'<div class="check"></div>'
			});
			
			// ensure all forms are reset
			if (this.hasClass = "form"){
			}
			else{
			this.reset();
			}

			 // loop over each input
			 allInputs.each(function(){
				var $this = $(this),
					type = $this.attr('type');
				
				if(!boxShadows){
					$this.addClass(type+'-input');	
				}
			 });

			 // loop over each select to build custom select styles
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
						'showSubtext' : true,
						'showContent' : true
					});
					
					if (window.PIE) {$('.form-group .styled-select .btn-group .btn').each(function() {PIE.attach(this);});} 	
				}
			 });

			// if no native support for placeholders
			if(!formPlaceholders){
				// loop through each
				placeholderInputs.each(function(){
					var $this = $(this),
						placeholderClass = 'placeholder',
						thisText = $this.val(),
						placeholderText = $this.attr('placeholder');
	
					// initialisation
					if(thisText !== placeholderText){
						//add placeholder classname and set value to placeholder text
						if(!$this.hasClass('password-input')){
						   $this.addClass(placeholderClass).val(placeholderText);
						   
						   }
						else{
						   //alert($this.attr('type'))
						   $this.wrap( "<div></div>" );
						   $this.addClass('real-pass').val('').parent().addClass('ie8-pass-div').append('<input type="text" class="dummy-pass" value="'+placeholderText+'"/>');
						   
						}
					}
					
					//focus
					$this.not(".real-pass, .dummy-pass").focus(function(){
						if($this.val() == $this.attr('placeholder')){
						   if(!$this.hasClass('password-input')){
							$this.removeClass(placeholderClass).val('');
							}	
						}
					});
					
					//blur
					$this.not(".real-pass, .dummy-pass").blur(function(){
						if($this.val() === '' || $this.val() == $this.attr('placeholder')){
						  if(!$this.hasClass('password-input')){
							//add placeholder classname and set value to placeholder text
							$this.addClass(placeholderClass).val(placeholderText);
							}
						}
					})
					.blur();
				});
			}

			
		});
		
		
		
	
		
		
	}

/**********Custom Date Picker birthdate********/


initForms();


/* Ajax based Forms Initialisers
-------------------------------*/
AjaxForm = $('.ajaxform');

	//////////////////////
	// initalises forms, standardises cross-device behaviours
	//////////////////////
	function initAjaxForms(){
		AjaxForm.each(function(){
			var $this = $(this),
				allInputs = $this.find('input'),
				allSelects = $this.find('select'),
				checkboxInputs = $this.find('input[type="checkbox"]'),
				radioInputs = $this.find('input[type="radio"]');
			
			// apply custom iCheck styles to checkboxes
			checkboxInputs.iCheck({
				'checkboxClass': 	'styled-checkbox',
				'checkedClass': 	'styled-checkbox-checked',
				'insert':			'<div class="check"></div>'
			});

			// apply custom iCheck styles to radios
			radioInputs.iCheck({
				'radioClass':		'styled-radio',
				'checkedClass': 	'styled-radio-checked',
				'insert':			'<div class="check"></div>'
			});
            
			// ensure all forms are reset
			if (this.hasClass = "form"){
			}
			else{
			this.reset();
			}

			 // loop over each input
			 allInputs.each(function(){
				var $this = $(this),
					type = $this.attr('type');
				
				if(!boxShadows){
					$this.addClass(type+'-input');	
				}
			 });

			 // loop over each select to build custom select styles
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
						'showSubtext' : true,
						'showContent' : true
					});
					
					if (window.PIE) {$('.form-group .styled-select .btn-group .btn').each(function() {PIE.attach(this);});} 	
				}
			 });

			// if no native support for placeholders
			if(!formPlaceholders){
				// loop through each
				placeholderInputs.each(function(){
					var $this = $(this),
						placeholderClass = 'placeholder',
						thisText = $this.val(),
						placeholderText = $this.attr('placeholder');
	
					if(thisText !== placeholderText){
						if(!$this.hasClass('password-input')){
						   $this.addClass(placeholderClass).val(placeholderText);
						   
						   }
						else{
						   //alert($this.attr('type'))
						   $this.wrap( "<div></div>" );
						   $this.addClass('real-pass').val('').parent().addClass('ie8-pass-div').append('<input type="text" class="dummy-pass" value="'+placeholderText+'"/>');
						   
						}
					}
					
					//focus
					$this.not('.real-pass, .dummy-pass').focus(function(){
						if($this.val() == $this.attr('placeholder')){
						   if(!$this.hasClass('password-input')){
							$this.removeClass(placeholderClass).val('');
							}
						}
					});
					
					//blur
					$this.not('.real-pass, .dummy-pass').blur(function(){
						if($this.val() === '' || $this.val() == $this.attr('placeholder')){
						  if(!$this.hasClass('password-input')){
							//add placeholder classname and set value to placeholder text
							$this.addClass(placeholderClass).val(placeholderText);
							}
						}
					})
					.blur();
				});
			}
			
	
			
		});
		

	}

/** AutoComplete Starts **/
/*var initAutoComplete = function(e) {

$( function() {
var availableTags = [
  "Goa",
  "North Goa",
  "South Goa",
    "Puri"
];

	$( ".AutoCompleteTags").textext({plugins : 'tags autocomplete focus', html: {focus: "<span/>" }}).bind('getSuggestions', function(e, data)
	{
		var list = availableTags,
			textext = $(e.target).textext()[0],
			query = (data ? data.query : '') || '' 
			;

		$(this).trigger(
			'setSuggestions',
			{ result : textext.itemManager().filter(list, query) }
		);
	})
})
};*/

/*29may2018 */
var initAutoComplete = function (e) {
    $(function () {
        $(".AutoCompleteTags").each(function(){
            if($(this).hasClass('search-input')){
                var availableTags = ["Singapore", "Sinta, Portugal", "Sinaia, Romania", "Sinchon, Seoul", "Sintra, Sintra", "Singaraja, Bali"];
                $(this).textext({
                    plugins : 'tags prompt focus autocomplete ajax arrow',
                    prompt : 'Add one...'
                }).bind('getSuggestions', function(e, data){
                    var list = availableTags,
                        textext = $(e.target).textext()[0],
                        query = (data ? data.query : '') || '';

                    $(this).trigger(
                        'setSuggestions',
                        { result : textext.itemManager().filter(list, query) }
                    );
                });
            }else{
                var availableTags = ["Singapore", "Sinta, Portugal", "Sinaia, Romania", "Sinchon, Seoul", "Sintra, Sintra", "Singaraja, Bali"];
                $(this).textext({
                    plugins: 'tags autocomplete focus',
                    html: {
                        focus: "<span/>"
                    }
                }).bind('getSuggestions', function (e, data) {
                    var list = availableTags,
                        textext = $(e.target).textext()[0],
                        query = (data ? data.query : '') || '';
                    $(this).find(".widget-wrap").removeClass("custom");
                    $(this).trigger('setSuggestions', {
                        result: textext.itemManager().filter(list, query)
                    });
                    $(this).find(".widget-wrap").addClass("custom");
                });                                    
            }
        });
    })
};
var initAutoCompleteSelected = function (e) {
    $(function () {
        var availableTags = ["Singapore", "Sinta, Portugal", "Sinaia, Romania", "Sinchon, Seoul", "Sintra, Sintra", "Singaraja, Bali"];
        $("#holidayTagsSelected").textext({
            tagsItems: ['Singapore', 'Malaysia'],
            prompt: 'Add one...',
            plugins: 'tags autocomplete focus',
            html: {
                focus: "<span/>"
            }
        }).bind('getSuggestions', function (e, data) {
            var list = availableTags,
                textext = $(e.target).textext()[0],
                query = (data ? data.query : '') || '';
            $(this).trigger('setSuggestions', {
                result: textext.itemManager().filter(list, query)
            });
        });
        
        $(".holidayTagsSelected").each(function(){
            $(this).textext({
            tagsItems: ['Singapore', 'Malaysia'],
            prompt: 'Add one...',
            plugins: 'tags autocomplete focus',
            html: {
                focus: "<span/>"
            }
        }).bind('getSuggestions', function (e, data) {
            var list = availableTags,
                textext = $(e.target).textext()[0],
                query = (data ? data.query : '') || '';
            $(this).trigger('setSuggestions', {
                result: textext.itemManager().filter(list, query)
            });
        });
        });
    })
};
/** AutoComplete Ends **/

var initUiInputAppendDate = function(e) {
    $('.input-append.date').find('input.span2').datepicker({
        changeMonth:true,
        changeYear:true,
        showOn:"both",
        firstDay:0, // Start with Monday
        dayNamesMin:"Sun Mon Tue Wed Thu Fri Sat".split(" "),
        dateFormat :"dd/mm/yy"
    });



    $('.hasDatepicker').datepicker().on("input change", function (e) {
        $(this).siblings('.holder').css("display", "none");
    });
};

var initUiCustomCalender = function(e) {
    $(function() {
      var available_dates = ["19-12-2018" , "26-12-2018"]; 
    var offer= ["29-12-2018"];
    var holiday= [  "30-9-2017"];
    var holidayDay = ["Dahihandi~Independence Day~Holdiay Title 01~Holdiay Title 02~Dussehra"];
    var soldOut= ["8-12-2018"];
    var FastSelling= ["12-12-2018" , "15-12-2018"];
    var OfferHoliday= ["29-12-2018"];
        $("#custom_datepicker , .custom_datepicker").datepicker({
            dayNamesMin: "SU MO TU WE TH FR SA".split(" "),
            setDate: "currentDate",
            dateFormat: 'dd-mm-yy',
            showAnim: "fold",
            defaultDate: "$(this).val()",
            beforeShowDay: function(date) {
                var m = date.getMonth(),
                    d = date.getDate(),
                    y = date.getFullYear();
                if (!$('.date-legends').length) {
                    $('.custom_datepicker .ui-datepicker').append('<div class="date-legends"><div class="today-date">Today&#39;s Date</div><div class="holiday">Holiday</div></div>');
                }
                var formattedDate = d + '-' + (m + 1) + '-' + y;
                if ($.inArray(formattedDate, holidayDate) != -1) {
                    return [true, 'holiday_date'];
                }
                return [true];
            },
            beforeShow: function(input, inst) {
   $('.ui-datepicker').addClass('customDatepicker');
},
beforeShowDay: function(date) {
    var m = date.getMonth(), 
        d = date.getDate(), 
        y = date.getFullYear();           
        if(!$('.dayInfo').length){
        $('#custom_multi_datepicker').append('<div class="dayInfo"><div class="dayInfoCont"><span class="close-day-info">Lowest Fares</span></div></div>');}
    var formattedDate = d + '-' + (m+1) + '-' + y;
    if($.inArray(formattedDate,available_dates) != -1) {
        return [true, 'available-dates','15,455'];
    }
    if($.inArray(formattedDate, offer) != -1) {
       return [true, 'available-dates offer','15,455'];
    }
    if($.inArray(formattedDate, soldOut) != -1) {
       return [true, 'available-dates soldOut','Sold out'];
    }
    if($.inArray(formattedDate, FastSelling) != -1) {
       return [true, 'available-dates FastSelling','15,455'];
    }

    
    
    
 
    
    
    if($.inArray(formattedDate, holiday) != -1) {
        for( var z = 0; z < holidayDay.length ;  z++ ){
var splitDates    = holidayDay[z].split("~");
       return [true, 'available-dates holiday','15,455'];
        }
    }

   
    return [true];
}
            
            
        })
    });
    $('.hasDatepicker').datepicker().on("input change", function(e) {
        $(this).siblings('.holder').css("display", "none");
    });
}


var initUiCustomizeCalenderMultiCity = function(e) {
    var no_fares = ["1-2-2017", "2-2-2017", "3-2-2017", "4-2-2017", "5-2-2017", "6-2-2017", "7-2-2017", "8-2-2017", "9-2-2017", "10-2-2017", "1-3-2017", "2-3-2017", "3-3-2017", "4-3-2017", "5-3-2017", "6-3-2017", "7-3-2017", "8-3-2017", "9-3-2017"];
    var dayrates = ["12,000", "7,200", "12,000", "7,200", "7,200", "9,000", "9,000"];
    var lowestRates = ["14-2-2017", "15-2-2017", "18-3-2017", "19-3-2017"]
    $('.input-append.date').find('input.datepickerMulticity').datepicker({
        changeMonth: false,
        changeYear: false,
        showOn: "both",
        numberOfMonths: 2,
        showButtonPanel: true,
        closeText: "X",
        firstDay: 0,
        defaultDate: "$(this).val()",
        dateFormat: "d M yy",
        beforeShow: function(input, inst) {
            $('.ui-datepicker').addClass('customDatepicker');
        },
        onClose: function(input, inst) {
            $('.ui-datepicker').removeClass('customDatepicker');
        },
        beforeShowDay: function(date) {
            var m = date.getMonth(),
                d = date.getDate(),
                y = date.getFullYear(),
                selectable = true,
                classname = "lowest-fare",
                title = "â‚¹" + dayrates[date.getDay()];
            if (!$('.dayInfo').length) {
                $('.customDatepicker').append('<div class="dayInfo"><div class="dayInfoCont"><span class="close-day-info">Lowest Fares</span></div></div>');
            }
            var formattedDate = d + '-' + (m + 1) + '-' + y;
            if ($.inArray(formattedDate, no_fares) != -1) {
                return [true, 'no-fares'];
            }
            if ($.inArray(formattedDate, lowestRates) != -1) {
                var m = date.getMonth(),
                    d = date.getDate(),
                    y = date.getFullYear(),
                    selectable = true,
                    classname = "lowest-fare  lowest-rates",
                    title = "Ã¢â€šÂ¹" + dayrates[date.getDay()];
                var formattedDate = d + '-' + (m + 1) + '-' + y;
            }
            return [selectable, classname, title];
        }
    });
    $('.hasDatepicker').datepicker().on("input change", function(e) {
        $(this).siblings('.holder').css("display", "none");
    });
}
var initUiCustomTwoMonthsCalender = function(e) {
    var holidayDate = ["26-2-2017", "29-2-2017", "13-3-2017", "23-3-2017"];
    $('.input-append.date').find('input.CustomTwoMonthsCalendar').datepicker({
        changeMonth: false,
        changeYear: false,
        showOn: "both",
        numberOfMonths: 2,
        showButtonPanel: true,
        closeText: "X",
        firstDay: 0,
        defaultDate: "$(this).val()",
        dateFormat: "d M yy",
        beforeShow: function(input, inst) {
            $('.ui-datepicker').addClass('customDatepicker');
            var rect = input.getBoundingClientRect();
            setTimeout(function() {
                inst.dpDiv.css({
                    top: rect.top + 40,
                    right: rect.right - 350
                });
            }, 0);
        },
        onClose: function(input, inst) {
            $('.ui-datepicker').removeClass('customDatepicker');
        },
        beforeShowDay: function(date) {
            var m = date.getMonth(),
                d = date.getDate(),
                y = date.getFullYear();
            if (!$('.dayInfo').length) {
                $('#ui-datepicker-div').append('<div class="dayInfo"><div class="today-date">Today"s Date</div><div class="holiday">Holiday</div></div>');
            }
            var formattedDate = d + '-' + (m + 1) + '-' + y;
            if ($.inArray(formattedDate, holidayDate) != -1) {
                return [true, 'holiday_date'];
            }
            return [true];
        }
    });
    $('.hasDatepicker').datepicker().on("input change", function(e) {
        $(this).siblings('.holder').css("display", "none");
    });
}