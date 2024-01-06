//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import Uu5Forms from "uu5g05-forms";
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

const Item = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Item",
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
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Item);

    return currentNestingLevel ? (
      <Uu5Elements.ListItem colorScheme = "cyan" actionList={[{icon: "uugds-close", onClick: props.onDelete }]}{...attrs}>
     <Uu5Forms.Checkbox.Input
          icon={props.solved ? "uugds-check" : undefined}
          defaultChecked= {props.solved}
          onClick= {props.onCheck}
        />
        {props.name}
    </Uu5Elements.ListItem>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Item };
export default Item;
//@@viewOff:exports
