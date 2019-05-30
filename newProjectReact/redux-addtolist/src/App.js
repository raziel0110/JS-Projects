import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import UserInput from "./UserInput";
import store from "./store";
import Footer from "./Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserInput />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
