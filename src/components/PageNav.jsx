// import "../index.css";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

export default function PageNav({ state }) {
  const { cartItem } = state;
  return (
    <header>
      <div className={styles.headerContent}>
        {/* <h1>Shop Plug</h1> */}
        <NavLink to="" className={styles.logo}>
          <img src={logo} alt="logo" className={styles.logoImg} />
        </NavLink>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink to="/cart">Cart({cartItem})</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    // <nav className={styles}>
    //   <NavLink to="" id="logo" href="#Shop">
    //     <img src={logo} alt="logo" id="logo-img" />
    //   </NavLink>
    //   <ul>
    //     <li>
    //       <NavLink to="/cart">Cart</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/login">Login</NavLink>
    //     </li>
    //   </ul>
    // </nav>
  );
}
