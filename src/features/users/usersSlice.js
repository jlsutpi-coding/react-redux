import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Naw ram" },
  { id: 2, name: "Sut Pi" },
  { id: 3, name: "Akar Hein" },
];

export const uesrsSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default uesrsSlice.reducer;
