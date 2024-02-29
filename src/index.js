import "./style.css";
import main from "./dropdown";
import { hiddenDiv, button, containerElement } from "./globalElements";
import eventHelper from "./event";

eventHelper(button, "click", () => {
  main(containerElement, hiddenDiv);
});
