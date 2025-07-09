// js/cart.js - Add to Cart functionality

function addToCart(game) {
  // Get existing cart or create a new one
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Add the selected game
  cart.push(game);

  // Save updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Show confirmation
  alert(`${game.name} has been added to your cart.`);
}
