import {createSlice} from '@reduxjs/toolkit';
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        product:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addproduct:(state,action)=>{
            state.quantity+=1;
            state.product.push(action.payload.products);
            state.total+=action.payload.price
        }
    }
})
export const {addproduct}=cartSlice.actions
export default cartSlice.reducer;