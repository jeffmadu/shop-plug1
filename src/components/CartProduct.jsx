import styles from "./CartProduct.module.css";
function CartProduct({ cartOrder, dispatch, numOfOrders }) {
  const { productImg, name, price } = cartOrder;

  return (
    <div className={styles.cartProduct}>
      <div className={styles.imageDiv}>
        <img src={productImg} className={styles.productImg} alt={name} />
      </div>
      <div>
        <div className={styles.productName}>{name}</div>
        <div>
          <span className={styles.productPrice}>${price}</span>
          {/* <span className={styles.productPrice}>${totalProductPrice}</span> */}
          <span>
            <button
              className="btn"
              onClick={() => {
                dispatch({ type: "DecreaseOrderNumbers", payload: cartOrder });
              }}
            >
              -
            </button>
            <span>{numOfOrders}</span>
            <button
              className="btn"
              onClick={() => {
                dispatch({ type: "IncreaseOrderNumbers", payload: cartOrder });
              }}
            >
              +
            </button>
            {/* <Button
              type={"btn"}
              dispatch={dispatch}
              buttonFunction="DecreaseOrderNumbers"
            >
              -
            </Button>
            <span>{numOfOrders}</span>
            <Button
              type={"btn"}
              dispatch={dispatch}
              buttonFunction="IncreaseOrderNumbers"
            >
              +
            </Button> */}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
