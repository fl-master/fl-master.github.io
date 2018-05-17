$(document).ready(function() {


	$('#portfolio_grid').mixItUp();


	/*------------------------Добавление класса active в портфолио-----------------------*/

	$(".s_portfolio li").click(function(){
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});


	/*------------------------Одинаковая высота Итемов-----------------------*/
	$(".left div, .right div").equalHeights();
	$(".services_item div").equalHeights();
 
	/*------------------------PopUp-----------------------*/
	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline"});



	/*------------------------Анимация блоков-----------------------*/
	$(".top_name h1").animated("fadeInDown", "fadeOutUp");
	$(".top_name p, .wrapper_descr").animated("fadeInUp", "fadeOutDown");
	$(".col_left, .col_right, .flipphoto").animated("zoomIn", "zoomOut");
	$(".item").animated("zoomIn", "zoomOut");
	$(".services_item_wrapper").animated("zoomIn", "zoomOut");


	/*--------------Высота header = высоте экрана--------------------
	----------------http://pixelcog.github.io/parallax.js/---------*/
	function heightDetect(){
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});


	/*---------------------------Animate_menu------------------------*/
	$(".toggle_mnu, .menu_item").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu li a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	});
	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_name").removeClass("h_opasity");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_name").addClass("h_opasity");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	/*---------------------------Присвоение ID-------------------------*/
	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".portfolio_descr").attr("id", "work_" + i);
	});
	$("input, select, textarea").not("[type=submit]").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();

});

/*---------------------------Preloader-------------------------*/
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});