import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOfCakes--;
    },
    restocked: (state, action) => {
      state.noOfCakes = state.noOfCakes + (action.payload || 5);
    },
  },
});


export default cakeSlice.reducer;

export const { ordered, restocked  } = cakeSlice.actions

