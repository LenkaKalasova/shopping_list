//@@viewOn:imports
import { createVisualComponent, Utils, useState, Content } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Uu5Forms from "uu5g05-forms"
import Item from "./item.js";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
const INITIAL_ITEM_LIST = [
  {id: Utils.String.generateId(), name: "1 kg rajčat", solved: false},
  {id: Utils.String.generateId(), name: "3x mléko", solved: false},
  {id: Utils.String.generateId(), name: "2 kg brambor", solved: false},
  {id: Utils.String.generateId(), name: "1x hladká mouka", solved: false},
  {id: Utils.String.generateId(), name: "10 vajec", solved: false}
]
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ShoppingList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingList",
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
    const [itemList, setItemList] = useState (INITIAL_ITEM_LIST);
    const [modalOpen, setModalOpen] = useState (false);
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, ShoppingList);

    function handleDelete (id){
      setItemList (([...actualItemList]) => {
       const index = actualItemList.findIndex ((oneitem) => oneitem.id === id);
       actualItemList.splice(index, 1);
       return actualItemList;      
      })
    }

    function handleSubmit (e) {
      const data = e.data.value
      setItemList (([...actualItemList]) => {
        actualItemList.push({...data, id: Utils.String.generateId(), solved: false});
        return actualItemList;      
       })
      setModalOpen (false)
    }

    return currentNestingLevel ? (
      <Uu5Elements.Block header="Nákup víkend" headerType="title" actionList={[{icon: "uugds-plus-circle", onClick: () => setModalOpen(true) }]}>
      <Uu5Elements.Grid display="inline" {...attrs}>
        {itemList.map((item) => (
          <Item key={item.id} {...item} onDelete = {() => handleDelete (item.id)} />
        ))}
      </Uu5Elements.Grid>
      <Uu5Forms.Form.Provider key={modalOpen} onSubmit={handleSubmit}>
        <Uu5Elements.Modal open={modalOpen} onClose={() =>setModalOpen (false)} header="Vytvoř novou položku" 
        footer={<div> <Uu5Forms.CancelButton/> <Uu5Forms.SubmitButton/> </div>}>
          <Uu5Forms.FormText name="name" label="Název položky"/>
          
        </Uu5Elements.Modal>
        </Uu5Forms.Form.Provider>
      </Uu5Elements.Block>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingList };
export default ShoppingList;
//@@viewOff:exports
