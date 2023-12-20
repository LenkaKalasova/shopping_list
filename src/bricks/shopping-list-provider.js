//@@viewOn:imports
import { createComponent, useDataList } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Calls from "calls";
import Config from "./config/config.js";
import MyLists from "./my-lists.js";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const ShoppingListProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingListProvider",
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
    const dataList = useDataList({
      handlerMap: {
        load: Calls.loadMyLists,
        create: Calls.createList
      },
      itemHandlerMap: {
        delete: Calls.deleteList
      }
    });
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    let result;
    switch(dataList.state) {
      case "pendingNoData":
        result = <Uu5Elements.Pending size = "max"/>;
        break;
      case "error":
          result = <Uu5Elements.Alert header = "Cannot create shopping list" priority = "error"/>;
          break;
      case "errorNoData":
          result = <Uu5Elements.Alert header = "Data about shopping lists cannot be loaded" priority = "error"/>;
          break;
      default:
        result = <MyLists data ={dataList.data} onCreate={dataList.handlerMap.create} />;
        break;
    }

    //@@viewOn:render
    return result;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingListProvider };
export default ShoppingListProvider;
//@@viewOff:exports
