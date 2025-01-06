import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { dojoConfig } from "../dojoConfig";
import { DojoContextProvider } from "./dojo/gen/DojoContext";
import { setupBurnerManager } from "@dojoengine/create-burner";
import { init } from "@dojoengine/sdk";
import { schema, StarkludoSchemaType } from "./dojo/gen/models.gen";

/**
 * Initializes and bootstraps the Dojo application.
 * Sets up the SDK, burner manager, and renders the root component.
 *
 * @throws {Error} If initialization fails
 */
async function main() {
  // const sdk = await init<StarkludoSchemaType>(
  //   {
  //     client: {
  //       rpcUrl: dojoConfig.rpcUrl,
  //       toriiUrl: dojoConfig.toriiUrl,
  //       relayUrl: dojoConfig.relayUrl,
  //       worldAddress: dojoConfig.manifest.world.address,
  //     },
  //     domain: {
  //       name: "WORLD_NAME",
  //       version: "1.0",
  //       chainId: "KATANA",
  //       revision: "1",
  //     },
  //   },
  //   schema
  // );

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      {/* <DojoContextProvider burnerManager={await setupBurnerManager(dojoConfig)}> */}
        <App />
        {/* <App sdk={sdk} /> */}
      {/* </DojoContextProvider> */}
    </StrictMode>
  );
}

main().catch((error) => {
  console.error("Failed to initialize the application:", error);
});
