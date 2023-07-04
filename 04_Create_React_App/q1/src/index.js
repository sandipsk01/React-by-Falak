import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {a, arr} from "./App";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
console.log(a);
console.log(arr);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
