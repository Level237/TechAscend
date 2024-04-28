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

  const headerSlice=createSlice({
    name:'header',
    initialState:{
      isVisible:false
    },
    reducers:{
      isShow:(state)=>{
        state.isVisible=!state.isVisible
      
      }
    }
  })
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
        StartedSlice:StartedSlice.reducer,
        headerSlice:headerSlice.reducer
    },
  });

  export const { hidden } = RsvpSlice.actions;
  export const { open,close } = StartedSlice.actions;
  export const { isShow } = headerSlice.actions

export default store;