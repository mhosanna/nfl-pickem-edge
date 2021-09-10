import { KeystoneContext } from "@keystone-next/keystone/types";

async function incrementCorrectPicks(
  root: any,
  { playerId, season }: { playerId: string; season: string },
  context: KeystoneContext
): Promise<Record<string, any>> {
  const correctPicksCount = await context.db.lists.Pick.findMany({
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

  const player = await context.db.lists.Player.findOne({
    where: { id: playerId },
  });

  return player;
}

export default incrementCorrectPicks;
