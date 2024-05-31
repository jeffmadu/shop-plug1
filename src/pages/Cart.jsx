import styles from "./Cart.module.css";
import CartProducts from "../components/CartProducts";
import Button from "../components/Button";

export default function Cart({ state, dispatch }) {
  const { productPrice, numOfOrders, cartItem, order, cartObj, rTotalPrice } =
    state;

  const price = productPrice * numOfOrders;
  const totalProductPrice = price.toFixed(2);
  // const totalProductPrice = price.toFixed(2);

  return cartItem ? (
    <>
      <CartProducts
        cartObj={cartObj}
        dispatch={dispatch}
        numOfOrders={numOfOrders}
        totalProductPrice={totalProductPrice}
        rTotalPrice={rTotalPrice}
      />
      <Button
        type={"add-to-cart"}
        dispatch={dispatch}
        buttonFunction="checkout"
      >
        Checkout
      </Button>

      {/* <button
        className="add-to-cart"
        id="checkout"
        onClick={() => {
          dispatch({ type: "checkout" });
        }}
      >
        Checkout
      </button> */}
    </>
  ) : order ? (
    <div className={styles.cartEmpty}> Your Order is on its way</div>
  ) : (
    <div className={styles.cartEmpty}>Cart Empty Order Now</div>
  );
}
