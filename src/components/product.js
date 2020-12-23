import React from 'react';

export const Product = (props) => {

  return (
    <li>{props.item.description}  S/.{props.item.price}</li>
  )
}