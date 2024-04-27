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
      isVisible: false,
    },
    reducers: {
      close: (state) => {
        state.isVisible =false;
       
      },
      open:(state)=>{
        state.isVisible=true
      }
    },
  });

  const store = configureStore({
    reducer: {
        RsvpSlice: RsvpSlice.reducer,
        StartedSlice:StartedSlice.reducer
    },
  });

  export const { hidden } = RsvpSlice.actions;
  export const { open,close } = StartedSlice.actions;

export default store;