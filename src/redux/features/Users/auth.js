import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../../store";

const initialState = {
  isLoading : false,
  error : null,
  user : null,
   token : null
};

export const UserLogin = (data) => async () => {
  try {
    
  } catch (err) {
   
  }
};

export const UserRegister = (data) => async () => {
  try {
    console.log(data)
  } catch (err) {
  
  }
};

export const verifyToken = (token) => async () => {
  dispatch(setLoading(true));
  try {
   
  } catch (err) {
   
  }
};



const AuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
   
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
   
  },
});

export const {

  setLoading,
  
} = AuthSlice.actions;

export default AuthSlice.reducer;
