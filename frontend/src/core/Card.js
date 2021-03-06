import {React,useState} from 'react';
import ImageHelper from './helper/Imagehelper';
import {Redirect} from "react-router-dom";
import {addItemToCart,removeItemFromCart} from './helper/Carthelper';
import { isAuthenticated } from '../auth/helper';

const Card = ({
    product,
    addtocart = true,
    removefromcart = false,
    reload = undefined,
    setReload = (f) => f,
}) => {
    const [redirect,setRedirect] = useState(false)
    const cartTitle = product ? product.name : "default "
    const cartDescription = product ? product.description : "default "
    const cartPrice = product ? product.price : "default"

    const addToCart = () =>{
        if (isAuthenticated()){
            addItemToCart(product,()=>setRedirect(true));
            console.log("added to cart")
        }else {
            console.log("login first")
        }
    }

    const getARedirect = redirect => {
        if (redirect){
          return  <Redirect to="/cart"/>
        }
    }

    const showAddToCart = addToCart => {
        return (
            addtocart && (<button onClick={addToCart}
            className="btn btn-block btn-outline-success mt-2 mb-2"
            > Add to Cart

            </button>)
        )
    }

    const showRemoveFromCart = removefromcart => {
        return (
            removefromcart && (<button onClick={() => {
                removeItemFromCart(product.id);
                setReload(!reload);
                console.log("Removed from cart")
            }}
            className="btn btn-block btn-outline-danger mt-2 mb-2"
            > Remove from cart

            </button>)
        )
    }


    return ( 
        <div className="card text-white bg-dark border border-info">
            <div className="card-header lead">{cartTitle}</div>
            <div className="card-body">
                {getARedirect(redirect)}
                <ImageHelper product={product} />
                 <p className="lead bg-success font-weight-normal text-wrap">{cartDescription}</p>
                <p className="btn btn-success rounded btn-sm px-4">{cartPrice}</p>
                <div className="row">
                    <div className="col-12">
                        {showAddToCart(addToCart)}
                    </div>

                    <div className="col-12">
                        {showRemoveFromCart(removefromcart)}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Card;