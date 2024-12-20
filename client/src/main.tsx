import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { setup } from "./dojo/setup.ts";
// import { dojoConfig } from "../dojoConfig.ts";
import { DojoProvider } from "./dojo/DojoContext.tsx";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./utils/apollo-client";

async function init() {
  const rootElement = document.getElementById("root");
  if (!rootElement) throw new Error("React root not found");
  const root = ReactDOM.createRoot(rootElement as HTMLElement);

  try {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(
          (registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
          },
          (error) => {
            console.error('Service Worker registration failed:', error);
          }
        );
      });
    }
  } catch (error) {
    console.log(error);
  }


  const setupResult = await setup(dojoConfig);

  !setupResult && <div>Loading....</div>;

  root.render(
    <React.StrictMode>
      <ApolloProvider client={apolloClient}>
        <DojoProvider value={setupResult}>
      <App />
      </DojoProvider>
      </ApolloProvider>
    </React.StrictMode>
  );
}

init();
