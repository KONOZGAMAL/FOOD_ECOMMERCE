import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
// const token = `843a6b53f417b29349b9fe938b38dcbbe30bcc27b6edfc10cccd0a8d56247e85c9195e11e8c8a335c69e6e7d34ddc69bfa936fa3c73a5ef44ce7c59d03993c1eaaf0a9d91a6ee0199bbc230f510ac809a077f1deae409505f13f85b378f17bb59ab45b3fa1ce68005bbbf64a397a6aa46b0cc0d5194fbdfcfc84fc925b23fc7d`;
const initialState = {
  cart: [],
  totalQuantity: 0,
  price: 0,
  isLoading:false,
};
// get all cart from server side
export const GetAllCartFromServer = createAsyncThunk(
  "cart/GetAllCartFromServer",
  async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL_KEY}/api/shopping-carts`
      );
      return response.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// add cart to server side
export const AddItemToServer = createAsyncThunk(
  "cart/AddItemToServer",
  async (cartFromUser) => {
    try {
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
       `${import.meta.env.VITE_URL_KEY}/api/shopping-carts`,
        cartFromUser,
        config
      );
      toast.success("Added to the Cart successfully!", {
        hideProgressBar: true,
        position: "bottom-right",
      });
      return response.data;
    } catch (error) {
      console.log({error});
        toast.error("Same product added to the Cart already!", {
          hideProgressBar: true,
          position: "bottom-right",
        });
    }
  }
);


// remove From Cart
export const RemoveFromCart = createAsyncThunk(
  "cart/RemoveFromCart",
  async (id, thunkAPI) => {
    try {
      // const config = {
      //   headers: {
      //     Authorization: `bearer ${token}`,
      //   },
      // };
      const response = await axios.delete(
        `${import.meta.env.VITE_URL_KEY}/api/shopping-carts/${id}`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: error.message,
        message: error.response?.data?.message || "An error occurred",
      });
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(AddItemToServer.fulfilled, (state) => {
      state.isLoading = true
    });

    builder.addCase(GetAllCartFromServer.fulfilled, (state, action) => {
      // state.cart = action.payload.data;
       state.cart = action.payload.data.filter((el) => {
        return el.attributes.IdUser == localStorage.getItem("idUser");
      });
    });
    //=> delete Item From Cart
    builder.addCase(RemoveFromCart.fulfilled, (state, action) => {
      state.cart = state.cart.filter((e) => e.id !== action.payload.data.id);
    });
  },
});

export default cartSlice.reducer;
// export const {} = cartSlice.actions;
