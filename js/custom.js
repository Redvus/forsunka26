;(function ($) {

    //Вставка кнопки прокрутки вверх
    jQuery('<div id="buttonUp"></div>').insertAfter('footer');
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() >= 400) {
			jQuery('#buttonUp').css({
				'-webkit-transform':'translateY(-20px)',
				'-moz-transform':'translateY(-20px)',
				'-o-transform':'translateY(-20px)',
				'transform':'translateY(-20px)',
				'opacity':'1'
				});
			}
		else {
			jQuery('#buttonUp').css({
				'-webkit-transform':'translateY(20px)',
				'-moz-transform':'translateY(20px)',
				'-o-transform':'translateY(20px)',
				'transform':'translateY(20px)',
				'opacity':'0'
				});
		}
	});
	jQuery('#buttonUp').click(function() {
		jQuery('body,html').animate({scrollTop: 0}, 400);
	});

	//jQuery('.collapse').collapse();

/*
	jQuery('.thumbnail > img').magnificPopup({
	    type: 'image',
	    removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery:{
		    enabled:true
		  }
	});
*/
	//Уменьшение заголовка при прокрутке
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() >= 30) {
			jQuery('#top').addClass('header_fixed fadeIn').css({
				'top':'0'
			});
			jQuery('#header_top').css({
				'margin-top':'45px'
			});
		}
		else {
			jQuery('#top').removeClass('header_fixed fadeIn');
			jQuery('#header_top').css({
				'margin-top':'0'
			});
		}
	});

	//Portfolio popup click handler//
    jQuery('.certificate').magnificPopup({
	    type: 'image',
	    removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        zoom: {
			enabled: true, // By default it's false, so don't forget to enable it
			duration: 300, // duration of the effect, in milliseconds
			easing: 'ease-in-out', // CSS transition easing function
		}
	});

	//Слайдер на главной
	var slider = new MasterSlider();
    slider.setup('masterslider' , {
        width:946,
        height:200,
        loop:true,
        fullwidth:true,
        speed:30,
        view:'fade',
        autoplay: true,
        swipe: false,
        mouse: false
    });
    //slider.control('arrows');
    slider.control('arrows');

    //Маска для ввода телефона
	$('#form-sobfeedback56 .sobInput_1').inputmask("[A{1,2}]");
	$('#form-sobfeedback56 .sobInput_3, #form-sobfeedback56 .sobInput_5, #form-sobfeedback56 .sobInput_6, #form-sobfeedback56 .sobInput_10').inputmask("[9{1,2}]");
	$('#form-sobfeedback56 .sobInput_4').inputmask("[9{1,4}]");
	$('#form-sobfeedback56 .sobInput_7').inputmask("[A{1,1}]");
	$('#form-sobfeedback56 .sobInput_8').inputmask("[A{1,3}]");
	$('#form-sobfeedback56 .sobInput_2, #form-sobfeedback56 .sobInput_9').inputmask("[9{1,3}]");
	$('#form-sobfeedback56 .sobInput_11').inputmask("*{1,64}@*{1,64}[.a{1,3}]");
	$('#form-sobfeedback56 .sobInput_12').inputmask("[A{1,64}]");
	$('#form-sobfeedback56 .sobInput_13').inputmask("+7 (999) 999 99 99");
	//$('[name=email]').inputmask("*{1,64}@*{1,64}[.*{1,3}]");
	//$('[name=data]').inputmask("[*{1,2}]/[*{1,2}]/20[*{1,2}]");
	//$('[name=people], [name=convoy]').inputmask("[*{1,3}]");
	//$('[name=age]').inputmask("[*{1,2}] - [*{1,2}]");

    //Ввод с клавиатуры
    var hydro_1 = $('.sobInput_1');
    var hydro_2 = $('.sobInput_2');
    var hydro_3 = $('.sobInput_3');
    var hydro_4 = $('.sobInput_4');
    var hydro_5 = $('.sobInput_5');
    var hydro_6 = $('.sobInput_6');
    var hydro_7 = $('.sobInput_7');
    var hydro_8 = $('.sobInput_8');
    var hydro_9 = $('.sobInput_9');
    var hydro_10 = $('.sobInput_10');

    hydro_1.keyup(function(){
		var Value_1 = hydro_1.val();
		$('#errmsg_1').empty();
		$('#errmsg_1').text(Value_1);
	});

	hydro_2.keyup(function(){
		var Value_2 = hydro_2.val();
		$('#errmsg_2').empty();
		$('#errmsg_2').text(Value_2);
	});

	hydro_3.keyup(function(){
		var Value_3 = hydro_3.val();
		$('#errmsg_3').empty();
		$('#errmsg_3').text(Value_3);
	});

	hydro_4.keyup(function(){
		var Value_4 = hydro_4.val();
		$('#errmsg_4').empty();
		$('#errmsg_4').text(Value_4);
	});

	hydro_5.keyup(function(){
		var Value_5 = hydro_5.val();
		$('#errmsg_5').empty();
		$('#errmsg_5').text(Value_5);
	});

	hydro_6.keyup(function(){
		var Value_6 = hydro_6.val();
		$('#errmsg_6').empty();
		$('#errmsg_6').text(Value_6);
	});

	hydro_7.keyup(function(){
		var Value_7 = hydro_7.val();
		$('#errmsg_7').empty();
		$('#errmsg_7').text(Value_7);
	});

	hydro_8.keyup(function(){
		var Value_8 = hydro_8.val();
		$('#errmsg_8').empty();
		$('#errmsg_8').text(Value_8);
	});

	hydro_9.keyup(function(){
		var Value_9 = hydro_9.val();
		$('#errmsg_9').empty();
		$('#errmsg_9').text(Value_9);
	});

	hydro_10.keyup(function(){
		var Value_10 = hydro_10.val();
		$('#errmsg_10').empty();
		$('#errmsg_10').text(Value_10);
	});
})(jQuery);