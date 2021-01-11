import React from 'react';
import {Link} from "react-router-dom";
export const Menu = (props) => {

  console.log(props);
    return (
        <section>
            <nav>
            <ul>
                <li>
                <Link to="/waiter">waiter</Link>
                
                </li>
                <li>
                <Link to="/kitchen">cocina</Link>
                </li>
            </ul>
            </nav>
        </section>
    )
}