import { DojoProvider } from "@dojoengine/core";
import { Account } from "starknet";
import * as models from "./models.gen";

export async function setupWorld(provider: DojoProvider) {
  const GameActions_create = async (
    snAccount: Account,
    gameMode: models.GameMode,
    playerGreen: number,
    playerYellow: number,
    playerBlue: number,
    playerRed: number,
    numberOfPlayers: number
  ) => {
    try {
      return await provider.execute(
        snAccount,
        {
          contractName: "GameActions",
          entrypoint: "create",
          calldata: [
            gameMode,
            playerGreen,
            playerYellow,
            playerBlue,
            playerRed,
            numberOfPlayers,
          ],
        },
        "starkludo"
      );
    } catch (error) {
      console.error(error);
    }
  };

  return {
    GameActions: {
      create: GameActions_create,
    },
  };
}
