const cssStyle = function addCssStyle(element, styles) {
  Object.assign(element.style, styles);
};

const dropDown = function createDropDown(
  wrap,
  dropdownItems,
  options = { dropDownBackGroundColor: "white" }
) {
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
    backgroundColor: `${options.dropDownBackGroundColor === "dark" ? "#28282B" : "white"}`,
  });

  const dropdownChildrenArr = Array.from(dropdownItems.children);

  dropdownChildrenArr.forEach((item) => {
    cssStyle(item, { padding: "6px 10px" });
    cssStyle(item.firstElementChild, {
      textDecoration: "none",
      color: `${options.dropDownBackGroundColor === "dark" ? "white" : "#28282B"}`,
    });
  });

  dropdownItems.classList.toggle("hidden");
};

export default dropDown;
