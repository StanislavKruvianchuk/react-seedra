import { createSlice } from "@reduxjs/toolkit";

let initialState = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

const cartSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
                console.log(JSON.parse(JSON.stringify(state)));
            } else {
                state.push({ ...action.payload});
                console.log(JSON.parse(JSON.stringify(state)));
            }

            localStorage.setItem('cartItems', JSON.stringify(state))
        }
    }
})

export const { addItem } = cartSlice.actions

export default cartSlice.reducer