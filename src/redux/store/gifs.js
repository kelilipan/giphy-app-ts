import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
};

export const gifsSlice = createSlice({
  name: "gifs",
  initialState,
  reducers: {
    storeImage: (state, action) => {
      state.images = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeImage, incrementByAmount } = gifsSlice.actions;

export default gifsSlice.reducer;
