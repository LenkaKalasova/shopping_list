import UuShoppingapp from "uu_shoppingapp_maing01-hi";
import { testProperties } from "uu5g05-test";

const CONFIG = {
  props: {
    // left: {
    //   values: ["Left as text", <span key="l">Left as JSX</span>, 0],
    // },
  },
  requiredProps: {
    // children: "Children content",
  },
};

describe(`UuShoppingapp.Bricks.DarkModeToggle`, () => {
  testProperties(UuShoppingapp.Bricks.DarkModeToggle, CONFIG);
});
