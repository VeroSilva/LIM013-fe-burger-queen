import React from 'react';

export const Product = (props) => {
 

  return (
    <li
      onClick={ () => (props.selectProduct(props.itemProduct))}
    >
      <div>{props.itemProduct.description}  S/.{props.itemProduct.price}</div>
    </li>

  )
}