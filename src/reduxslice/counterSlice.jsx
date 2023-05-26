import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    username: "Janny",
    totalAmount: 2500701
  },
  reducers: {
    Doneteten: (state, action) => {
      state.totalAmount -= action.payload
    },
    Donetefive: (state, action) => {
      state.totalAmount -= action.payload
    }
  }
})
export const { Doneteten, Donetefive } = counterSlice.actions
export default counterSlice.reducer;
