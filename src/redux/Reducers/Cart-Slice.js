import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action){
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            )
            
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].productQuantity += 1
            } else {
                const tempProduct = {...action.payload, productQuantity: 1}
                state.cartItems.push(tempProduct)
            }
        },
        decreaseItem(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            )

            if(state.cartItems[itemIndex].productQuantity > 1) {

                state.cartItems[itemIndex].productQuantity -= 1

            } else 
            if (state.cartItems[itemIndex].productQuantity === 1) {

                const nextItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                )

                state.cartItems = nextItems
            }
        },
        getTotalAmount(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, productQuantity } = cartItem
                    const itemTotal = price * productQuantity

                    cartTotal.total += itemTotal
                    cartTotal.quantity += productQuantity

                    return cartTotal
                }, {
                    total: 0,
                    quantity: 0
                }
            )

            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
        }
    }
})

export const { addToCart, decreaseItem, getTotalAmount } = cartSlice.actions

export default cartSlice.reducer