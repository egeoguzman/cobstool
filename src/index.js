import { StrictMode } from "react";
import '@aws-amplify/ui-react/styles.css';
//import ReactDOM from "react-dom";
import {ThemeProvider} from "@aws-amplify/ui-react";
import { createRoot } from "react-dom/client";
import studioTheme from './ui-components/studioTheme';


import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);








