//@@viewOn:imports
import { Utils, createVisualComponent, PropTypes, useState, useScreenSize } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Uu5Forms from "uu5g05-forms";
import Config from "./config/config.js";
import Uu5TilesElements from "uu5tilesg02-elements";
import ShoppingListTile from "./shopping-list-tile.js";

//@@viewOff:imports

//@@viewOn:constants
const INITIAL_SHOPPING_LISTS = [
{id: Utils.String.generateId(), name: "Nákup víkend"},
{id: Utils.String.generateId(), name: "Drogerie"},
{id: Utils.String.generateId(), name: "Nákup Vánoce"},
{id: Utils.String.generateId(), name: "Nákup pro babičku"},
]
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const MyLists = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "MyLists",
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
    const [createOpen, setCreateOpen] = useState (false);
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, MyLists);
    return currentNestingLevel ? (
      <>
      <Uu5Elements.Block header = "Seznam nákupních listů" actionList={[{icon: "uugds-plus-circle", children: "Vytvořit", onClick: () => setCreateOpen(true) }]}>
      <Uu5TilesElements.Grid data={props.data} tileMinWidth={100} tileMaxWidth={200}>
      {<ShoppingListTile></ShoppingListTile>}
    </Uu5TilesElements.Grid> 
    </Uu5Elements.Block>
    <Uu5Forms.Form.Provider key={createOpen} onSubmit={async (e) => {await props.onCreate ({id: Utils.String.generateId(), ...e.data.value }); setCreateOpen(false);}}>
      <Uu5Elements.Modal open={createOpen} onClose={() =>setCreateOpen (false)} header="Vytvoř nový nákupní seznam" 
      footer={<div> <Uu5Forms.CancelButton/> <Uu5Forms.SubmitButton/> </div>}>
      <Uu5Forms.FormText name="name" required/>
      </Uu5Elements.Modal>
      </Uu5Forms.Form.Provider>
      </>
      ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { MyLists };
export default MyLists;
//@@viewOff:exports
