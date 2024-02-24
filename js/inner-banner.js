$(function() {
  // Banner JS
  $(".bg-banner-inner-page").mousemove(function(event){
		var x = (event.clientX/$(window).width())-0.5;
		var y = (event.clientY/$(window).height())-0.5;
		TweenLite.to($(".bg-banner-inner-page"), 0.6, {
      rotationY:5*x,
      rotationX:5*y,
      ease:Power1.easeOut,
      transformPerspective:500,
      transformOrigin:"center"
    });
	});
});