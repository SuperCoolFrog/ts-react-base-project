import * as React from "react";
import { Provider } from "react-redux";
import store from "../../store/store";
import Hello from "../Hello/Hello";

const App = () => (
  <Provider store={store}>
    <Hello compiler="Typescript" framework="React" />,
  </Provider>
);

export default App;
