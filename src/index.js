import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import "./index.css";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
import { BrowserRouter as Router } from "react-router-dom";
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);


root.render(
  <React.StrictMode>
    <MoralisProvider
      initializeOnMount
      appId={"zoTwfhzhgSRIKqFo7I8tFIOeH8WiiMkn5vBHbklw"}
      serverUrl={"https://37cpsm80bqa0.usemoralis.com:2053/server"}
    >
      <NotificationProvider>
        <Router>
          <App />
        </Router>
      </NotificationProvider>
    </MoralisProvider>
  </React.StrictMode>
);


