import CartProduct from "./CartProduct";

function CartProducts({
  cartObj,
  dispatch,
  numOfOrders,
  totalProductPrice,
  rTotalPrice,
}) {
  return cartObj.map((cartOrder, index) => (
    <CartProduct
      cartOrder={cartOrder}
      key={index}
      dispatch={dispatch}
      numOfOrders={numOfOrders}
      totalProductPrice={totalProductPrice}
      rTotalPrice={rTotalPrice}
    />
  ));
}

export default CartProducts;
