import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)

    const { img, name, price, seller } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{seller}</p>
                <p>Price: {price}</p>
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-purchase">add to cart</button>
            </div>
        </div>
    );
};

export default Product;