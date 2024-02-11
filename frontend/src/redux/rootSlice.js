import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        loading: false,
        portfolioData: null,
        reloadData: false
    },
    reducers: {
        ShowLoading: (state) => {
            state.loading = true;
        },
        HideLoading: (state) => {
            state.loading = false;
        },
        SetPortfolioData: (state, action) => {
            state.portfolioData = action.payload;
        },
        ReloadData: (state, action) => {
          state.reloadData = action.payload;
      },

    },

})
export default rootSlice.reducer;
export const { ShowLoading, HideLoading, SetPortfolioData, ReloadData } = rootSlice.actions;

/*

  name: "root",
  initialState: {
    loading: false,
    portfolioData: null,
  },
  reducers: {
    ShowLoading: (state) => {
      state.loading = true;
    },
    HideLoading: (state) => {
      state.loading = false;
    },
    SetPortfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
  },
});

export const { ShowLoading, HideLoading, SetPortfolioData } = rootSlice.actions;

export default rootSlice.reducer;
*/