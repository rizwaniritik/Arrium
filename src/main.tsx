import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import CssBaseline from "@mui/material/CssBaseline";
import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Fragment>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Fragment>
);
