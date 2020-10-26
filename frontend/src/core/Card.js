import React from 'react';
import ImageHelper from './helper/Imagehelper';

const Card = ({
    product,
    addToCart = true,
    removeFromCardt = false,
}) => {
    return ( 
        <div className="card text-white bg-dark border border-info">
            <div className="card-header lead">A photo from pixels</div>
            <div className="card-body">
                <ImageHelper product={product} />
                <p className="lead bg-success font-weight-normal text-wrap">This photo looks great</p>
                <p className="btn btn-success rounded btn-sm px-4">$5</p>
                <div className="row">
                    <div className="col-12">
                        <button onClick={()=>{}}
                        className="btn btn-block btn-outline-success mt-2 mb-2"
                        > Add to Cart

                        </button>
                    </div>

                    <div className="col-12">
                        <button onClick={()=>{}}
                        className="btn btn-block btn-outline-danger mt-2 mb-2"
                        > Remove from Cart

                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Card;