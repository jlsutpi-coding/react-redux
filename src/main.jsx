import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import { store } from "./state/store.js";
import { fetchUser } from "./features/users/usersSlice.js";
import { fetchPosts } from "./features/posts/postsSlice.js";

import App from "./App.jsx";

import "./index.css";

store.dispatch(fetchUser());
store.dispatch(fetchPosts());
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
