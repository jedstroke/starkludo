import { createDojoStore } from "@dojoengine/sdk";
import { StarkludoSchemaType } from "../gen/models.gen";

/**
 * Global store for managing Dojo game state.
 */
export const useDojoStore = createDojoStore<StarkludoSchemaType>();
