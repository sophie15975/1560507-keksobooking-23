
export const makeElement = function (tagName, className) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};

