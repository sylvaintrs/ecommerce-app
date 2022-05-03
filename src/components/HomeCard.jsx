import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/Reducers/Cart-Slice'


function HomeCard(productData) {

    const dispatch = useDispatch()
    
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }


    return (
        <div className='homeCard'>
            <div className="product-image">
                <img src={productData.product.img} alt="" />
            </div>
            <h4>{productData.product.title}</h4>
            <p>${productData.product.price}</p>
            <button onClick={() => handleAddToCart(productData.product)}>
                Add to cart
            </button>
        </div>
    )
}

export default HomeCard

// {props.productImageSrc}
// {props.productTitle}
// `$${props.productPrice}`