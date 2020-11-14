import React, {useState,useEffect} from 'react';
import Base from './Base';
import Card from "./Card";
import { loadCart } from './helper/Carthelper';

const Cart = () => {
    const [reload,setReload] = useState(false)
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        setProducts(loadCart());
    },[reload]);

    const loadAllProducts = (products) => {
        return ( 
            <div>
                {products.map((product,index)=>(
                    <Card
                    key={index}
                    product={product}
                    addtocart={false}
                    removefromcart={true}
                    reload = {reload}
                    setReload = {setReload}
                    />
                ))}
            </div>
         );
    };

    

    const checkoutAllProducts = () => {
        return ( 
            <div>
                <h1>Checkout</h1>
            </div>
         );
    }
     
   
    return ( <Base title="Your Cart" description="Shop More to get Discounts">
    <div className="row">
        <div className="col-6">{loadAllProducts(products)}</div>
        <div className="col-6">{checkoutAllProducts()}</div>

    </div>
    </Base> );
}
 
export default Cart;