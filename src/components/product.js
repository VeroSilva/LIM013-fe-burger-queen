import React from 'react';

export const Product = (props) => {
 

  return (
    <li
      onClick={ () => (props.selectProduct(props.itemProduct))}
    >
      <p>{props.itemProduct.description}  S/.{props.itemProduct.price}</p>
      <div>S/.{props.itemProduct.price}</div>
      <img src={props.itemProduct.photo} alt="img-product"></img>
    </li>

  )
}