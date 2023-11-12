//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import RouteBar from "../core/route-bar.js";
import ShoppingList from "../bricks/shopping-list.js";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({
    padding: 32,
  }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let Detail = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Detail",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    return (
      <div {...attrs}>
        <RouteBar />
        <ShoppingList />
        </div>
    );
    //@@viewOff:render
  },
});

Detail = withRoute(Detail, { authenticated: true });

//@@viewOn:exports
export { Detail };
export default Detail;
//@@viewOff:exports
