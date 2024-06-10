import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const initialState = {
  wishlist: [],
};

// add Wishlist to server side
export const AddItemToWishlist = createAsyncThunk(
  "Wishlist/AddItemToWishlist",
  async (WishlistFromUser) => {
    try {
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        `${import.meta.env.VITE_URL_KEY}/api/wish-lists`,
        WishlistFromUser,
        config
      );
      toast.success("Added to the wishlist successfully!", {
        hideProgressBar: true,
        position: "bottom-right",
      });
      return response.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// get Wishlist from server side
export const GetAllWishlistFromServer = createAsyncThunk(
  "Wishlist/GetAllWishlistFromServer",
  async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_URL_KEY}/api/wish-lists`);
      return response.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// remove From Wishlist
export const RemoveFromWishlist = createAsyncThunk(
  "cart/RemoveWishlist",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_URL_KEY}/api/wish-lists/${id}`
      );
      return response.data;
    } catch (error) {
      console.log({ error });
      return thunkAPI.rejectWithValue({
        error: error.message,
        message: error.response?.data?.message || "An error occurred",
      });
    }
  }
);

const WishListSlice = createSlice({
  name: "Wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAllWishlistFromServer.fulfilled, (state, action) => {
      // state.wishlist = action.payload.data;
      state.wishlist = action.payload.data.filter((el) => {
        return el.attributes.IdUser == localStorage.getItem("idUser");
      });
    });
    //=> delete Item From wish-lists
    builder.addCase(RemoveFromWishlist.fulfilled, (state, action) => {
      state.wishlist = state.wishlist.filter(
        (e) => e.id !== action.payload.data.id
      );
    });
    builder.addCase(RemoveFromWishlist.rejected, (state, action) => {
      state.wishlist = action.payload
    });
  },
});

export default WishListSlice.reducer;
// export const { addToCart, deleteFromCart } = cartSlice.actions;
