//@@viewOn:imports
import { createVisualComponent, Utils, Content, useAppBackground } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const DarkModeToggle = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "DarkModeToggle",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    const [background, setBackground] = useAppBackground();
    const darkMode = background === "dark";
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, DarkModeToggle);

    return currentNestingLevel ? (
      <Uu5Elements.Toggle
        value={!darkMode}
        onChange={() => setBackground({
          backgroundColor: Uu5Elements.UuGds.ColorPalette.getValue(["building", darkMode ? "light" : "dark", "main"])
        })}
        iconOff="uugdsstencil-weather-moon"
        iconOn="uugdsstencil-weather-sun"
      />
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { DarkModeToggle };
export default DarkModeToggle;
//@@viewOff:exports
