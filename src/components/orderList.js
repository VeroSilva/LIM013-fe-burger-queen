import React, { useEffect, useState } from 'react';

export const OrderList=(props)=>{
    return (
        <li>
            <div>
                {props.itemProduct.description}  
                S/.{props.itemProduct.price}
                <span className="material-icons" onClick={ () => (props.onDelete(props.itemProduct))}>
                    delete_outline
                </span>
            </div>
        </li>
    )
};