import React from 'react';
const ImageHelper =({ product }) => {
    const imageurl = product.image
    // product ? product.image : `https://miro.medium.com/max/10944/0*q-LikG1uxPkgj_14`

    return (
        <div className="rounded border border-success p-2">
            <img src={imageurl}
            style={{maxHeight:"100%",maxWidth:"100%"}}
            alt="photo"
            className="mb-3 rounded" />
        </div>
    )
}

export default ImageHelper;