//@@viewOn:imports
import { createVisualComponent, Utils, useState, Content, AppBackgroundProvider, Lsi } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Uu5Forms from "uu5g05-forms"
import Item from "./item.js";
import Config from "./config/config.js";
import DarkModeToggle from "./dark-mode-toggle.js";
import importLsi from "../lsi/import-lsi.js";
import Uu5Charts from "uu5chartsg01";

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
    const [selectedItemId, setSelectedItemId] = useState(null);
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

    function handleCheck(id) {
      const updatedList = itemList.map((item) => ({
        ...item,
        solved: item.id === id ? !item.solved : item.solved
      }));
      setItemList(updatedList);
      setSelectedItemId(id === selectedItemId ? null : itemId);
    }


    return currentNestingLevel ? (
      <>
      <AppBackgroundProvider>
        <DarkModeToggle />
      <Uu5Elements.Block header={<Lsi import={importLsi} path={["ShoppingList", "name"]}/>} headerType="title" actionList={[{icon: "uugds-plus-circle", children: <Lsi lsi={{cs: "Vytvořit", en: "Create"}}/>, onClick: () => setModalOpen(true) }]}>
      <Uu5Elements.Grid display="inline" {...attrs}>
        {itemList.map((item) => (
          <Item key={item.id} {...item} onDelete = {() => handleDelete (item.id)}
          onCheck={() => handleCheck(item.id)}
          isChecked={selectedItemId === item.id}/>
        ))}
      </Uu5Elements.Grid>
      <Uu5Forms.Form.Provider key={modalOpen} onSubmit={handleSubmit}>
        <Uu5Elements.Modal open={modalOpen} onClose={() =>setModalOpen (false)} header={<Lsi import={importLsi} path={["ShoppingList", "create"]}/>} 
        footer={<div> <Uu5Forms.CancelButton/> <Uu5Forms.SubmitButton/> </div>}>
          <Uu5Forms.FormText name="name" label={<Lsi import={importLsi} path={["ShoppingList", "itemName"]}/>}/>
          
        </Uu5Elements.Modal>
        </Uu5Forms.Form.Provider>
       <Uu5Charts.PieChart data={[
  { label:"Vyřešené položky", value: 1, colorScheme: "green" },
  { label:"Nevyřešené položky", value: 4, colorScheme: "red" }
]}>
        </Uu5Charts.PieChart>
      </Uu5Elements.Block>
      </AppBackgroundProvider>
      </>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingList };
export default ShoppingList;
//@@viewOff:exports
