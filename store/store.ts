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

  const store = configureStore({
    reducer: {
        RsvpSlice: RsvpSlice.reducer, // Ajoutez votre slice ici
    },
  });

  export const { hidden } = RsvpSlice.actions; // Exportez les actions

export default store;