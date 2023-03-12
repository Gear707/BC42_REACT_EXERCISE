import React from 'react';
import Item from './Item';

function ItemList() {
    return (
        <section className="pt-4">
            <div className="container px-lg-5">
                {/* Page Features*/}
                <div className="row gx-lg-5">
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <Item />
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <Item />
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <Item />
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <Item />
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <Item />
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <Item />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemList;