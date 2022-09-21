export function getSelector(selector) {
  return document.querySelector(selector);
}
export function getSelectors(selector) {
  return document.querySelectorAll(selector);
}
export function addEvent(element, eventType, handler) {
  return element.addEventListener(eventType, handler);
}
export function removeEvent(element, eventType, handler) {
  return element.removeEventListener(eventType, handler);
}
