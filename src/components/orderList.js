import React from 'react';

export const OrderList=(props)=>{
    return (
        <li className="item-order">
            <p className="order-name">{props.itemProduct.description} </p>
            <p className="order-price">S/.{props.itemProduct.price}</p> 
            <span className="material-icons order" 
                onClick={ () => (props.onDelete(props.itemProduct))}>
                    delete_outline
            </span>
          
        </li>
    )
};