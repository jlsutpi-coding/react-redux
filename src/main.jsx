import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./state/store.js";
import { fetchUser } from "./features/users/usersSlice.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

store.dispatch(fetchUser());
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
