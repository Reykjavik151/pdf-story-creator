import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Nullable } from '#types/Nullable';

// Define a type for the slice state
interface PagesState {
  lastCreatedPageUri: Nullable<string>;
}

// Define the initial state using that type
const INITIAL_STATE: PagesState = {
  lastCreatedPageUri: null,
};

export const pagesSlice = createSlice({
  name: 'pages',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: INITIAL_STATE,
  reducers: {
    setCreatedPage: (state, { payload: newPageUri }: PayloadAction<string>) => {
      state.lastCreatedPageUri = newPageUri;
    },
  },
});

export const { setCreatedPage } = pagesSlice.actions;

export const pagesReducer = pagesSlice.reducer;
