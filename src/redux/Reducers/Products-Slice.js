import { createSlice } from '@reduxjs/toolkit'

import Image1 from '../../sass/img/shoe-1.png'
import Image2 from '../../sass/img/shoe-2.png'
import Image3 from '../../sass/img/shoe-3.png'

const initialState = {
    product1: {
        id: 1,
        img: Image1,
        title: 'Shoe number 1',
        price: 100
    },
    product2: {
        id: 2,
        img: Image2,
        title: 'Shoe number 2',
        price: 200
    },
    product3: {
        id: 3,
        img: Image3,
        title: 'Shoe number 3',
        price: 300
    }
}


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
})

export default productSlice.reducer