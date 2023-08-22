import React from "react";
import styles from "../styles/Navbar.module.css";
import { useValue } from "../itemContext";
function Navbar() {
  
  const {item, total, reset, toggle}= useValue();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={toggle}>Cart</button>
        <button className={styles.button} onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Navbar;
