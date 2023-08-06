import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { AppContextProvider } from "./context/AppContext";
import { NotificationsProvider } from "@mantine/notifications";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <NotificationsProvider>
          <App />
        </NotificationsProvider>
      </MantineProvider>
    </AppContextProvider>
  </React.StrictMode>
);
