import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./utils/customTheme";
import storeOrder from "./store/order";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <Provider store={storeOrder}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
