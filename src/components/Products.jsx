import { Link } from "react-router-dom";
import "../App.css";

const ProductsData = [
  {
    name: "Strong T-Shirt",
    productImg: "product-Img/strong.png",
    price: 19.99,
  },
  {
    name: "Speakers",
    productImg: "product-Img/speakers.png",
    price: 18.99,
  },
  {
    name: "Television",
    productImg: "product-Img/television.png",
    price: 15.99,
  },
  {
    name: "Home theater",
    productImg: "product-Img/hometheather.png",
    price: 60.99,
  },
  {
    name: "Smartphone",
    productImg: "product-Img/smartphone.jpg",
    price: 87.99,
  },
  {
    name: "fan",
    productImg: "product-Img/fan.jpg",
    price: 17.99,
  },
];

export default function Products({
  setCartItem,
  cartItem,
  setProductPrice,
  setProductImage,
  setProductName,
  setOrder,
  dispatch,
}) {
  const myProducts = ProductsData;

  return (
    <main className="product-container">
      {myProducts.map((product) => (
        <Product
          productObj={product}
          key={product.name}
          setCartItem={setCartItem}
          cartItem={cartItem}
          setProductPrice={setProductPrice}
          setProductImage={setProductImage}
          setProductName={setProductName}
          setOrder={setOrder}
          dispatch={dispatch}
        />
      ))}
    </main>
  );
}

function Product({ productObj, dispatch }) {
  const { price, productImg, name } = productObj;

  return (
    <section className="product">
      <img src={productImg} alt={name} />
      <h2>{name}</h2>
      <p className="priceProduct">{price}</p>

      <button
        to="cart"
        className="add-to-cart"
        onClick={() => {
          dispatch({ type: "addCart", payload: productObj });
        }}
      >
        Add to cart
      </button>
    </section>
  );
}
