//@@viewOn:imports
import { createComponent, useState, Lsi } from "uu5g05";
import Config from "./config/config.js";
import Uu5TilesElements from "uu5tilesg02-elements";
import Uu5Elements from "uu5g05-elements";
import importLsi from "../lsi/import-lsi.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const ShoppingListTile = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingListTile",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [deleteOpen, setDeleteOpen] = useState (false);
    props.data.handlerMap.delete;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <>
      <Uu5TilesElements.Tile 
      header = {props.data.data.name} 
      actionList={[{icon: "uugds-close-circle-solid", onClick:() => setDeleteOpen(true) }]}>
        
        Počet položek: {props.data.data.number}
        </Uu5TilesElements.Tile>
        
        <Uu5Elements.Dialog 
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        header={<Lsi import={importLsi} path={["ShoppingListTile", "deleteItem"]}/>} 
        info={props.data.data.name}
        icon="uugds-delete" 
        actionList={[
          {children: <Lsi import={importLsi} path={["ShoppingListTile", "delete"]}/>, colorScheme: "negative", significance: "highlighted", onClick:() => props.data.handlerMap.delete()},
          {children: <Lsi import={importLsi} path={["ShoppingListTile", "cancel"]}/>, onClick:() => setDeleteOpen(false)}
        ]}
        ></Uu5Elements.Dialog>
        </>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingListTile };
export default ShoppingListTile;
//@@viewOff:exports
