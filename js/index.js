import { getSelector, addEvent, removeEvent } from './modules/helpers.js';

window.onload = () => {
  getSelector('.date-ipt').value = new Date().toJSON().split('T')[0];
  tripSearchResultDisplay();
};

function tripSearchResultDisplay(results = undefined) {
  const display = getSelector('.trip-card-right');
  if (!results) {
    display.innerHTML = `
<div class="no-search-started">
    <div class="train-png-wrapper">
        <img class="train-png" src="images/train.png" />
    </div>
    <p class="train-png-footer-txt">It's time to book your future trip.</p>
</div>
    `;
  }
}
