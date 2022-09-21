import { getSelector, addEvent, removeEvent } from './modules/helpers.js';

window.onload = () => {
  cartDisplay();
};

function cartDisplay(items = undefined) {
  const mainContainer = getSelector('.main-container');
  if (!items) mainContainer.innerHTML = nothingInCart();
}

function nothingInCart() {
  return `
    <div class="cart-display">
        <div class="cart-message-wrapper">
            <p class="cart-message-line-1">No tickets in your cart.</p>
            <p class="cart-message-line-2">Why not plan a trip?</p>
        </div>
    </div>
        `;
}
