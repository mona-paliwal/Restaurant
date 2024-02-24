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
});