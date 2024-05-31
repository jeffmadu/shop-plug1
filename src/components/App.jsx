import Header from "./Header";
import Cart from "./CartProducts";
import Products from "./Products";
import Order from "./Order";
import { useReducer } from "react";

const initialState = {
  cartItem: 0,
  productPrice: 0,
  productImage: 0,
  productName: "",
  order: false,
  numOfOrders: 1,
};

function reducer(state, action) {
  // console.log(state.cartItem);
  // console.log(action.payload.price);
  // console.log(action.payload);
  switch (action.type) {
    case "addCart":
      return {
        ...state,
        cartItem: state.cartItem + 1,
        productPrice: action.payload.price,
        productImage: action.payload.productImg,
        productName: action.payload.name,
        order: false,
      };
    case "IncreaseOrderNumbers":
      return {
        ...state,
        numOfOrders: state.numOfOrders + 1,
      };
    case "DecreaseOrderNumbers":
      return {
        ...state,
        numOfOrders: state.numOfOrders - 1,
      };
    case "checkout":
      return {
        ...state,
        cartItem: 0,
        order: true,
      };
    default:
      new Error("Action unkown");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Header state={state} />
      <Products dispatch={dispatch} />
      {state.cartItem ? <Cart state={state} dispatch={dispatch} /> : null}

      {state.order && <Order />}
    </div>
  );
}

export default App;
