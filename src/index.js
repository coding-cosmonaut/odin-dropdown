import "./style.css";
import dropDown from "./dropdown";
import { hiddenDiv, button, containerElement } from "./globalElements";
import eventHelper from "./event";

eventHelper(button, "click", () => {
  dropDown(containerElement, hiddenDiv, { dropDownBackGroundColor: "dark" });
});
