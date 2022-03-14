import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// Alla paket och den data man hämtar in i form av ramverk eller biblotek omsluter man sin "App" med.
// Här använder vi "BrowserRouter", "ChakraProvider" och "RecoilRoot" för att lägga in de bibilotek i vår "App".
