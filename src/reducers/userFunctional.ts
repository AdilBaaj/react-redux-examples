import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type stateI = Readonly<{
  email: string;
  username: string;
}>;

export const initialState: stateI = { email: 'adil.baaj@nimbleways.com', username: 'Adil'};

 const userSlice =  createSlice({
  name: 'userFunctional',
  initialState,
  reducers: {
    updateUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
})

export const { updateUsername } = userSlice.actions;

export default userSlice.reducer;

export const selectUsername = (state: stateI):string => state.username;
