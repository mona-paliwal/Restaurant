$(function() {
  // Hamburger Menu JS
	$(".burger-menu").click(function() {
    $(this).toggleClass("active");
		$(".fixed-navbar-menu-mobile").toggleClass("active");
		$(".menu-listing-mobile").toggleClass("active");
		$("body").toggleClass("active");
	});
	// Mobile Menu Listing JS
  $(".menu-listing-mobile > li > a").click(function() {
    $(".menu-listing-mobile > li > a").parent().removeClass("active");
    $(this).parent().addClass("active");
    $(this).next().slideToggle();
  });
  // AOS Animation JS
  AOS.init({
    easing: 'ease-in-out-sine'
  });
  // Jarallax JS
  $(".jarallax").jarallax({
    speed: 0.2
  });
});