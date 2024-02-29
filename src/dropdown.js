const cssStyle = function addCssStyle(element, styles) {
  Object.assign(element.style, styles);
};

const main = function createDropDown(wrap, dropdownItems) {
  cssStyle(wrap, {
    position: "relative",
  });

  cssStyle(dropdownItems, {
    position: "absolute",
    padding: "10px 0",
    border: "0.5px solid black",
    borderRadius: "3px",
    margin: "2px 0px 0px 0px",
    listStyle: "none",
    whiteSpace: "nowrap",
    backgroundColor: "white"
  });

  const dropdownChildrenArr = Array.from(dropdownItems.children);

  dropdownChildrenArr.forEach((item) => {
    cssStyle(item, { padding: "6px 10px" });
  });

  dropdownItems.classList.toggle("hidden");
};

export default main;
