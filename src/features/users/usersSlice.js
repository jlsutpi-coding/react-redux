import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = [];
// users: [],
// status: "idle", //  "idle" | "loading" | "successed" | "failed"
// error: null,/

export const fetchUser = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USERS_URL);
  return [...response.data];
});

export const uesrsSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllUsers = (state) => state.users;
export const selectUserById = (state, userId) =>
  state.users.find((user) => user.id === userId);
export default uesrsSlice.reducer;
