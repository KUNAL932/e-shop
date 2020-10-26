import React from 'react';
const imageHelper =({product}) => {
    const imageurl = product ? product.image : `https://miro.medium.com/max/10944/0*q-LikG1uxPkgj_14`

    return (
        <div className="rounded border border-success p-2">
            <img src={imageurl}
            style={{maxHeight:"100%",maxWidth:"100%"}}
            alt=""
            className="mb-3 rounded" />
        </div>
    )
}

export default imageHelper;