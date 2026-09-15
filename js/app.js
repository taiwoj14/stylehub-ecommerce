let cartCount = 0;

const cartCounter = document.getElementById("cart-count");

const addToCartButtons = document.querySelectorAll(".add-cart");

addToCartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        cartCount++;

        cartCounter.textContent = cartCount;

        alert("Product added to cart!");

    });

});