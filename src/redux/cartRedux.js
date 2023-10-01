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
        },
        removeprodduct:(state,action)=>{
          
          state.quantity-=1;
          state.product.pop(action.payload.products);
          state.total+=action.payload.price
      },
          increase: (state, action) => {
            state.product=state.product.map((item) => {
              if (item.id === action.payload){
                return { ...item,total:item.total + 1 };
              }
              return item;
            });
          },
          decrease: (state, action) => {
            state.product = state.product.map((item) => {
                if (item.id === action.payload) {
                  return { ...item, total: item.total - 1 };
                }
                return item;
              })
              
          }

     }
})
 export const {addproduct,increase,decrease}=cartSlice.actions
export default cartSlice.reducer;