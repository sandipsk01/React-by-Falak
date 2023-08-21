import React from "react";
import styles from "../styles/ItemCard.module.css";
import { itemContext } from "../itemContext";
import { totalContext } from "../totalContext";
import { useContext } from "react";

function ItemCard({ id, name, price }) {
  const {item, setItem}= useContext(itemContext);   //destructured
  const {total, setTotal}=useContext(totalContext);
  const handleAdd = () => {
    setTotal(total+price);
    setItem(item+1)
  };

  const handleRemove = () => {
    if(total>0){
      setTotal((prevState)=>prevState-price);
      setItem((prevState)=>prevState-1)
    } 
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
