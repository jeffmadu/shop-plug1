import PageNav from "./components/PageNav";
import Cart from "./components/CartProducts";
import CartPage from "./pages/Cart";
import Products from "./components/Products";
import Login from "./pages/Login";
import { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import order from "./components/Order";

const initialState = {
  cartItem: 0,
  productPrice: 0,
  productImage: 0,
  productName: "",
  order: false,
  numOfOrders: 1,
  cartObj: [],
};

function reducer(state, action) {
  // console.log(state.cartItem);
  // console.log(action.payload.price);

  switch (action.type) {
    case "addCart":
      console.log(state.cartObj);
      return {
        ...state,
        cartItem: state.cartItem + 1,
        productPrice: action.payload.price,
        productImage: action.payload.productImg,
        productName: action.payload.name,
        cartObj: [...state.cartObj, action.payload],
        order: false,
        // cartPrice: state.cartObj[state.cartItem - 1].price,
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
    <BrowserRouter>
      <PageNav state={state} />
      <Routes>
        <Route index element={<Products dispatch={dispatch} />} />
        <Route path="login" element={<Login />} />
        <Route
          path="cart"
          element={<CartPage state={state} dispatch={dispatch} />}
        />
      </Routes>
    </BrowserRouter>

    // <div>
    //   <Header />
    //   <Products dispatch={dispatch} />
    //   {state.cartItem ? <Cart state={state} dispatch={dispatch} /> : null}

    //   {state.order && <Order />}
    // </div>
  );
}

export default App;
