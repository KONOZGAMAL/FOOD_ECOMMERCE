import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "../../axios/axiosConfig";
const initialState = {
  productData: [],
  allCategories:[],
  filterCategory: {},
  productDetails: {},
  isLoading: false,
  error: null,
};
// get all products
export const GetAllProducts = createAsyncThunk(
  "products/getallproducts",
  async () => {
    try {
      const { data } = await axiosConfig({
        url: `/products?populate=*`,
      });
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

// get product details
export const GetProductdetails = createAsyncThunk(
  "products/GetProductdetails",
  async (slug , { rejectWithValue }) => {
    try {
      const { data } = await axiosConfig({
        url: `/products/${slug}?populate=*`,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// get All categories
export const GetAllCategories = createAsyncThunk(
  "products/GetAllCategorie",
  async () => {
    try {
      const { data } = await axiosConfig({
        url: `/categories?populate=*`,
      });
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

// filter Categories
export const FilterCategory = createAsyncThunk(
  "products/FilterCategory",
  async (titleCategory) => {
    try {
      const { data } = await axiosConfig({
        url: `/categories?filters[title]=${titleCategory}&populate[products][populate][0]=image`,
      });
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //=> get all products
    builder.addCase(GetAllProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(GetAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productData = action.payload.data;
    });
    builder.addCase(GetAllProducts.rejected, (state, action) => {
      state.error = action.payload;
    });
    //=> get product details
    builder.addCase(GetProductdetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(GetProductdetails.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log(action);
      state.productDetails = action.payload.data;
    });
    builder.addCase(GetProductdetails.rejected, (state, action) => {
      state.error = action.payload;
    });
        //=> get product categories
        builder.addCase(GetAllCategories.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        });
        builder.addCase(GetAllCategories.fulfilled, (state, action) => {
          state.isLoading = false;
          state.allCategories = action.payload;
        });
        builder.addCase(GetAllCategories.rejected, (state, action) => {
          state.error = action.payload;
        });
             //=> Filter Category
            builder.addCase(FilterCategory.pending, (state) => {
              state.isLoading = true;
            });
            
            builder.addCase(FilterCategory.fulfilled, (state, action) => {
              state.filterCategory = action.payload;
            });
  },
});

export default ProductSlice.reducer;
