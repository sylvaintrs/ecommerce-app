import React from 'react'

import Shoe1 from '../sass/img/shoe-1.png'

function HomeCard(...props) {
    return (
        <div className='homeCard'>
            <div className="product-image">
                <img src={Shoe1} alt="" />
            </div>
            <h4>Popular shoe cart</h4>
            <p>$236.00</p>
            <button>
                Add to cart
            </button>
        </div>
    )
}

export default HomeCard

// {props.productImageSrc}
// {props.productTitle}
// `$${props.productPrice}`