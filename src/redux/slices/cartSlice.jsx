import { createSlice } from "@reduxjs/toolkit";

const initialState = [];


const loadState = () => {
    try {
        const serializedState = localStorage.getItem("reduxState");
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (err) {
        console.error("Load state error:", err);
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("reduxState", serializedState);
    } catch (err) {
        console.error("Save state error:", err);
    }
};

const cartSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id)
          
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                return [...state, action.payload];
            }

        }
    }
})

export const { addItem } = cartSlice.actions

export default cartSlice.reducer