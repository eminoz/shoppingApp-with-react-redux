import { createSlice } from "@reduxjs/toolkit";
const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    totalPrice: 0,
  },
  reducers: {
    countOrdersPrice(state) {
      state.orders.forEach((e) => {
        state.totalPrice = state.totalPrice + e.quantity * e.price;
      });
      console.log("total price" + state.totalPrice);
    },
    addOrderToCart(state, actions) {
      const newItem = actions.payload;

      const existingOrder = state.orders.find(
        (item) => item.productName === newItem.productName
      );

      if (!existingOrder) {
        state.orders.push(newItem);
        state.totalPrice = state.totalPrice + newItem.price;
        return;
      }
      existingOrder.quantity++;
      state.totalPrice = state.totalPrice + newItem.price;
    },
    getAllOrders(state, actions) {
      state.orders = actions.payload;
      state.orders.forEach((e) => {
        state.totalPrice = state.totalPrice + e.quantity * e.price;
      });
    },
    updateOrderByProductName(state, actions) {
      state.orders = actions.payload;
    },
    incraceQuantity(state, actions) {
      let a = actions.payload.productName;
      const filtered = state.orders.find((e) => e.productName === a);

      state.totalPrice = state.totalPrice + filtered.price;
      filtered.quantity++;

      console.log(state.totalPrice);
    },
    decriceQuantity(state, actions) {
      let productName = actions.payload.productName;
      let deleteAll = actions.payload.deleteAll;

      const filtered = state.orders.find((e) => e.productName === productName);
      if (deleteAll) {
        state.orders = state.orders.filter(
          (e) => e.productName !== filtered.productName
        );

        state.totalPrice =
          state.totalPrice - filtered.quantity * filtered.price;

        return;
      }
      if (filtered.quantity === 0) {
        state.orders = state.orders.filter(
          (e) => e.productName !== filtered.productName
        );
        return;
      }
      state.totalPrice = state.totalPrice - filtered.price;
      filtered.quantity--;
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice;
