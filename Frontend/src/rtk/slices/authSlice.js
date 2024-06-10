import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  msg: "",
  loading: false,
  error: null,
  signIn: false,
  token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
  iduser:localStorage.getItem("idUser") ? localStorage.getItem("idUser") : "",
};

export const signUpUser = createAsyncThunk(
  "auth/signupuser",
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        `${import.meta.env.VITE_URL_KEY}/api/auth/local/register`,
        user,
        config
      );
      return response.data;
    } catch (error) {
      toast.error(error.response.data.error.message);
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

// loginUser
export const loginUser = createAsyncThunk(
  "auth/loginuser",
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        `${import.meta.env.VITE_URL_KEY}/api/auth/local`,
        user,
        config
      );
      toast.success("Success Login ");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.error.message);
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("idUser");
      state.msg = "";
      navigator('/login');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state) => {
        state.loading = false;
        state.msg = "Registration successful!";
        state.signIn = true;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.msg = action.payload;
      })
      /// login User
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.jwt;
        localStorage.setItem("token", action.payload.jwt);
        localStorage.setItem("idUser", action.payload.user.id);
        state.iduser = action.payload.user.id
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.msg = action.payload;
      });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
