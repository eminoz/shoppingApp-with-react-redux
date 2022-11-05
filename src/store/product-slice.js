import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    getProducts(state, action) {
      state.products = action.payload;
    },

  },
});
export const productActions = productSlice.actions;
export default productSlice;
