import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "Learning Redux Toolkit",
    content: "I have heard good things.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: 2,
    title: "Slices..",
    content: "The more I slice, the more I want pizza.",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    postsAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPost = (state) => state.posts;

export const { postsAdded } = postsSlice.actions;
export default postsSlice.reducer;
