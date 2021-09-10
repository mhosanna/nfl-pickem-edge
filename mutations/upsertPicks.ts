import { PickCreateInput } from "./../.keystone/schema-types";
import { KeystoneContext } from "@keystone-next/keystone/types";

async function upsertPicks(
  root: any,
  {
    playerId,
    gameId,
    teamId,
  }: { playerId: string; gameId: string; teamId: string },
  context: KeystoneContext
): Promise<PickCreateInput> {
  // 0. if the game already has a winner, don't let player make a pick
  const picksGame = await context.lists.Game.findOne({
    where: { id:  gameId  },
    query: "id winner {id}",
  });
  if (picksGame.winner) return;

  //1. check if player has pick for this gameId already
  const existingPick = await context.lists.Pick.findMany({
    where: {
      AND: [
        {
          player: {
            id: {equals: playerId},
          },
        },
        {
          game: {
            id: {equals: gameId},
          },
        },
      ],
    },
    query: "id, picked {id}",
  });

  //2. if so, update pick
  if (existingPick.length > 0) {
    //if selected same team, delete pick
    if (existingPick[0].picked.id === teamId) {
      return await context.lists.Pick.deleteOne({
        where: {id: existingPick[0].id},
        resolveFields: false,
      });
    } else {
      return await context.lists.Pick.updateOne({
        where: {id: existingPick[0].id},
        data: {
          picked: { connect: { id: teamId } },
        },
        resolveFields: false,
      });
    }
  }
  //3. if not, create a new pick
  else {
    return await context.lists.Pick.createOne({
      data: {
        player: { connect: { id: playerId } },
        game: { connect: { id: gameId } },
        picked: { connect: { id: teamId } },
      },
      resolveFields: false,
    });
  }
}

export default upsertPicks;
