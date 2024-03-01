const cssStyle = function addCssStyle(element, styles) {
  if (element instanceof NodeList) {
    element.forEach((el) => Object.assign(el.style, styles));
  } else {
    Object.assign(element.style, styles);
  }
};

const find = function findDataToggler(func) {
  document
    .querySelectorAll("[data-toggler='true']")
    .forEach((toggle) => toggle.addEventListener("click", func));
};

const set = function setDisplayProperty(el) {
  if (window.getComputedStyle(el.nextElementSibling).display === "none") {
    el.nextElementSibling.style.setProperty("display", "block");
  } else {
    el.nextElementSibling.style.setProperty("display", "none");
  }
};

const check = function checkForDarkMode(el) {
  if (el.nextElementSibling.classList.contains("dropdown-items-darkmode")) {
    return true;
  }
  return false;
};

const dropDown = function createDropDown() {
  const wrap = document.querySelectorAll(".dropdown-container");
  const dropdownItems = document.querySelectorAll(".dropdown-items");

  find(dropDown);
  let darkMode;
  if (this) {
    darkMode = check(this);
  }

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
    display: `${!this ? "none" : set(this)}`,
    whiteSpace: "nowrap",
    backgroundColor: `${darkMode ? "#28282B" : "white"}`,
  });

  dropdownItems.forEach((item) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < item.children.length; i++) {
      cssStyle(item.children[i], { padding: "6px 10px" });
      cssStyle(item.children[i].firstElementChild, {
        textDecoration: "none",
        color: `${darkMode ? "white" : "#28282B"}`,
      });
    }
  });
};

export default dropDown;
