import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './slices/ProductSlice'
import authSlice from './slices/authSlice'
import cartSlice from './slices/cartsSlice'
import wishListSlice from './slices/wishListSlice'



export const store = configureStore({
  reducer: {
    AllProducts:ProductSlice,
    auth:authSlice,
    carts:cartSlice,
    wish_List:wishListSlice,
  },
})