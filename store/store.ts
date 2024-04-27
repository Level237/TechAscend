import { configureStore,createSlice } from '@reduxjs/toolkit';


const RsvpSlice = createSlice({
    name: 'rsvp',
    initialState: {
      isVisible: true,
    },
    reducers: {
      hidden: (state) => {
        state.isVisible =false;
      },
    },
  });

  const StartedSlice=createSlice({
    name: 'start',
    initialState: {
      isVisible: true,
    },
    reducers: {
      hide: (state) => {
        state.isVisible =!state.isVisible;
      },
    },
  });

  const store = configureStore({
    reducer: {
        RsvpSlice: RsvpSlice.reducer,
        StartedSlice:StartedSlice.reducer
    },
  });

  export const { hidden } = RsvpSlice.actions;
  export const { hide } = StartedSlice.actions;

export default store;