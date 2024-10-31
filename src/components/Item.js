import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] =  useState(false)

  const toggleInCart = () => {
    setIsInCart((prevInCart) => !prevInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* <button className="add">Add to Cart</button> */}
      <button onClick={toggleInCart}>
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
