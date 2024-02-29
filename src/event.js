const eventHelper = function addEvent(element, listener, func) {
  return element.addEventListener(listener, func);
};

export default eventHelper;
