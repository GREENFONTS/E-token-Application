import { createSlice } from "@reduxjs/toolkit";
import Data from '../../../Pages/LoanData'

const initialState = {
  data : Data,
  currentData : null
};

const UtilSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setCurrentData : (state, action) => {
      state.currentData = action.payload
    },
    setFilterData : (state, action) => {
      state.data = action.payload
    }
  },
});

export const { setCurrentData, setFilterData } = UtilSlice.actions;

export default UtilSlice.reducer;
