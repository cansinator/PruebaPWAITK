/******** Menu *******************/
$("li.usermenu").css("display", "none");
$(document).ready(function() {
	$("#hamburger").click(function (event) {
		event.stopPropagation();
		$( "#effectEfect" ).toggle( "slide"); 
		$("ul.menuNivel1 > li > a > div").css("display", "block");
		$("#menuContPrin > ul.menuNivel1 > li > ul.menuNivel2 > li > a > div").css("display", "block");
		$("#menuContPrin > ul.menuNivel1 > li > ul.menuNivel2 > li > ul.menuNivel3 > li > a > div").css("display", "block"); 

	});
	$("#effectEfect").click (function (event){
		event.stopPropagation();
	}); 
});

/*Detecta resolucion de pantalla*/
if (matchMedia) {
  var mq = window.matchMedia("(min-width: 801px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}
function WidthChange(mq) {

	if (mq.matches) {
		$(".menuNivel2 ").toggle(false);
		$(document).click(function() {
			$(".menuNivel2 ").toggle(false);
			$(".menuNivel3").toggle(false);
			$('ul.menuNivel1 > li').removeClass("in");
			$("ul.menuNivel1 > li > a > div").css("display", "none");
			$("#effectEfect").css("display", "block");
		});
		$("ul.menuNivel1 > li > a > div").css("display", "none");
	  	$("#menuContPrin ul li").removeClass("in");
		$('ul.menuNivel1>li').off("click");
		$('ul.menuNivel2>li').off("click");
		$("#menuContPrin ul li").removeClass("menuActive");
		$("#effectEfect").css("display", "block");
		$("li.usermenu").css("display", "none");

		$('ul.menuNivel1>li').on('click', function(event) {
			event.stopPropagation();
			
			$target = $(this).children();

			if ($(this).hasClass("in"))  {
			    $('ul.menuNivel2').slideUp();
				$(this).removeClass("in");
				$('.flechaMenu').removeClass("rotar");
				$("#menuContPrin ul li").removeClass("menuActive");
    			$("#menuContPrin ul.menuNivel1 li a img").removeClass("icoActive");

    			$("ul.menuNivel1 > li > a > div").css("display", "none");

    			$("#menuContPrin ul.menuNivel1 li ul.menuNivel2 li a div").css("display", "none");
			}else {
			  	$('ul.menuNivel1 > li').removeClass("in");
				$('ul.menuNivel2').slideUp();
				$('ul.menuNivel3').slideUp();
				$('ul.menuNivel2>li').removeClass("in");
				$(this).addClass("in");
			  	$target.slideDown();
				$('ul.menuNivel1 > li > a .flechaMenu').addClass("rotar");
				$("#menuContPrin ul li").removeClass("menuActive");
    			$("#menuContPrin ul.menuNivel1 li a img").removeClass("icoActive");

    			$("ul.menuNivel1 > li > a > div").css("display", "block");

    			$("#menuContPrin ul.menuNivel1 li ul.menuNivel2 li a div").css("display", "block");
			}
		});
		$('ul.menuNivel2>li').on('click', function(event) {
			$(document).click(function() {
				$(".menuNivel3").toggle(false);
			});
			event.stopPropagation();
			$target = $(this).children();

			if ($(this).hasClass("in"))  {
			    $('ul.menuNivel3').slideUp();
				$(this).removeClass("in");
				$('ul.menuNivel2 > li > a .flechaMenu').removeClass("rotar");
				$('ul.menuNivel2 > li.in > a').removeClass("active");
			}else {
			  	$('ul.menuNivel2 > li').removeClass("in");
				$('ul.menuNivel3').slideUp();
				$(this).addClass("in");
			  	$target.slideDown();
				$('ul.menuNivel2 > li > a .flechaMenu').addClass("rotar");
				$('ul.menuNivel2 > li.in > a').addClass("active");
			}
		});
		$('ul.menuNivel3>li').on('click', function(event) {
			event.stopPropagation();
		});

	} else {
		$(document).click(function() {
			$("#effectEfect").toggle(false);
		});
		$("#effectEfect").css("display", "none");
	   	$("#menuContPrin ul").removeClass("normal");
	   	$('ul.menuNivel1>li').off("click");
		$('ul.menuNivel2>li').off("click");
		$(".usermenu").css("display", "block");

		$('ul.menuNivel1>li').on('click', function(event) {
			event.stopPropagation();
			
			$target = $(this).children();

			if ($(this).hasClass("in"))  {
			    $('ul.menuNivel2').slideUp();
				$(this).removeClass("in");
				$('.flechaMenu').removeClass("rotar");
				$("#menuContPrin ul li").removeClass("menuActive");
    			$("#menuContPrin ul.menuNivel1 li a img").removeClass("icoActive");
			}else {
			  	$('ul.menuNivel1 > li').removeClass("in");
				$('ul.menuNivel2').slideUp();
				$('ul.menuNivel3').slideUp();
				$('ul.menuNivel2>li').removeClass("in");
				$(this).addClass("in");
				$(".usermenu").removeClass("in");
			  	$target.slideDown();
				$('ul.menuNivel1 > li > a .flechaMenu').addClass("rotar");
				$("#menuContPrin ul li").removeClass("menuActive");
    			$("#menuContPrin ul.menuNivel1 li a img").removeClass("icoActive");
			}
		});
		$('ul.menuNivel2>li').on('click', function(event) {
			event.stopPropagation();
		
			$target = $(this).children();

			if ($(this).hasClass("in"))  {
			    $('ul.menuNivel3').slideUp();
				$(this).removeClass("in");
				$('ul.menuNivel2 > li > a .flechaMenu').removeClass("rotar");
				$('ul.menuNivel2 > li.in > a').removeClass("active");
			}else {
			  	$('ul.menuNivel2 > li').removeClass("in");
				$('ul.menuNivel3').slideUp();
				$(this).addClass("in");
			  	$target.slideDown();
				$('ul.menuNivel2 > li > a .flechaMenu').addClass("rotar");
				$('ul.menuNivel2 > li.in > a').addClass("active");
			}
		});
		$('ul.menuNivel3>li').on('click', function(event) {
			event.stopPropagation();
		});
	}
}
