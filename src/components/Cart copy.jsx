export default function Cart({ state, dispatch }) {
  const { productPrice, productImage, productName, numOfOrders } = state;

  const price = productPrice * numOfOrders;
  const totalProductPrice = price.toFixed(2);

  return (
    <div id="cart">
      <div id="cart-el">
        <div className="cart-img">
          <img src={productImage} alt={productName} />
        </div>
        <div className="cart-btn">
          <button
            className="btn"
            onClick={() => {
              dispatch({ type: "DecreaseOrderNumbers" });
            }}
          >
            -
          </button>
          <span>{numOfOrders}</span>
          <button
            className="btn"
            onClick={() => {
              dispatch({ type: "IncreaseOrderNumbers" });
            }}
          >
            +
          </button>
        </div>
      </div>
      <div id="price">Price:${totalProductPrice}</div>
      <div>
        <button
          className="add-to-cart"
          id="checkout"
          onClick={() => {
            dispatch({ type: "checkout" });
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
