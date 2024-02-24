$(function() {
  // Banner JS
  $(".bg-banner").mousemove(function(event){
		var x = (event.clientX/$(window).width())-0.5;
		var y = (event.clientY/$(window).height())-0.5;
		TweenLite.to($(".bg-banner"), 0.6, {
      rotationY:5*x,
      rotationX:5*y,
      ease:Power1.easeOut,
      transformPerspective:500,
      transformOrigin:"center"
    });
	});
  // Smooth Animation JS ( Banner Section to About Section )
  $(".read-more-banner > a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1400);
    }
  });
  // About Image JS
  gsap.registerPlugin(ScrollTrigger);
  let revealContainers = document.querySelectorAll(".reveal");
  revealContainers.forEach((container) => {
    let image = container.querySelector("img");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "restart none none reset"
      }
    });
    tl.set(container, { autoAlpha: 1 });
    tl.from(container, 1.5, {
      xPercent: -100,
      ease: Power2.out
    });
    tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.out
    });
  });
});