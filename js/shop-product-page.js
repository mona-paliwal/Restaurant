$(function() {
  // Increase and Decrease Product Quantity JS
  $(".quantity-inc").click(function() {
    var $qty = $(this).closest("div").find(".form-control-product-quantity");
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal)) {
      $qty.val(currentVal + 1);
    }
  });
  $(".quantity-dec").click(function() {
    var $qty = $(this).closest("div").find(".form-control-product-quantity");
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal > 1) {
      $qty.val(currentVal - 1);
    }
  });
  // Product Image JS
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