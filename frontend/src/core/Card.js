import React from 'react';
const Card = () => {
    return ( 
        <div className="card text-white bg-dark border border-info">
            <div className="card-header lead">A photo from pixels</div>
            <div className="card-body">
                <div className="rounder border border-success p-2">
                    <img
                    src="https://miro.medium.com/max/10944/0*q-LikG1uxPkgj_14"
                    alt="photo"
                    style={{ maxWidth:"100%" , maxHeight: "100%" 
                }}
                className="mb-3 rounded" />
                </div>
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