import { KeystoneContext, SessionStore } from "@keystone-next/types";
import { Player } from "../schemas/Player";
import { Pick } from "../schemas/Pick";

import { PlayersCreateInput } from "../.keystone/schema-types";

async function incrementCorrectPicks(
  root: any,
  { playerId, season }: { playerId: string; season: string },
  context: KeystoneContext
): Promise<void> {
  console.log("INCREMENTING PLAYER PICK COUNT");
  console.log({ playerId });
  console.log({ season });
  const correctPicksCount = await context.lists.Pick.findMany({
    where: {
      AND: [
        {
          player: {
            id: playerId,
          },
        },
        {
          game: {
            season: season,
          },
        },
        {
          isCorrect: true,
        },
      ],
    },
  });

  console.log(correctPicksCount);

  const player = await context.lists.Player.findOne({
    where: { id: playerId },
  });

  return player;
}

export default incrementCorrectPicks;
