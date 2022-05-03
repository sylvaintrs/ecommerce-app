import { configureStore } from '@reduxjs/toolkit'

import CartReducer from './Reducers/Cart-Slice'
import ProductsReducer from './Reducers/Products-Slice'



const store = configureStore({
    reducer: {
        products: ProductsReducer,
        cart: CartReducer
    }
})


export default store