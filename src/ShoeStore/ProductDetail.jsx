import React from 'react';

function ProductDetail({ product }) {
    if (!product) return null;

    return (
        // <>
        //     <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1}>
        //         <div className="modal-dialog">
        //             <div className="modal-content">
        //                 <div className="modal-header">
        //                     <h1 className="modal-title fs-5">Modal title</h1>
        //                     <button className="btn-close" />
        //                 </div>
        //                 <div className="modal-body">
        //                     <p>Woo-hoo, you're reading this text in a modal!</p>
        //                 </div>
        //                 <div className="modal-footer">
        //                     <button className="btn btn-secondary">Close</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="modal-backdrop fade show" />
        // </>
        <div>
            <h1>{product.name}</h1>
        </div>
    )
}

export default ProductDetail;