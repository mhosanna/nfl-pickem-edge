import { list } from "@keystone-next/keystone/schema";
import { text, integer, float, relationship } from "@keystone-next/fields";
import { deleteManyBeforeDeleteHook } from "../utils/cascadeDelete"

export const Game = list({
  ui: {
    listView: {
      initialColumns: [
        "season",
        "week",
        "homeTeam",
        "spread",
        "awayTeam",
        "winner",
      ],
    },
  },
  fields: {
    season: text({ isRequired: true }),
    slug: text({isRequired: true}),
    week: relationship({
      ref: "Week.games",
      many: false,
    }),
    spread: float(),
    homeTeam: relationship({
      ref: "Team",
      many: false,
    }),
    awayTeam: relationship({
      ref: "Team",
      many: false,
    }),
    winner: relationship({
      ref: "Team",
      many: false,
    }),
    picks: relationship({
      ref: "Pick.game",
      many: true,
      hooks: {
        beforeDelete: deleteManyBeforeDeleteHook({ref: "Pick"}),
      },
    }),
  },
  hooks: {
    validateInput: async ({
      originalInput,
      resolvedData,
      listKey,
      existingItem,
      operation,
      addValidationError,
    }) => {
      //we are updating a game
      //TODO: use 'operation' instead
      if (existingItem) {
        const changedFields = Object.keys(resolvedData);
        //if home team is being updated
        if (
          changedFields.includes("homeTeam") &&
          existingItem.awayTeamId == resolvedData.homeTeam
        ) {
          return addValidationError("Teams must be different");
        }
        //if away team is being updated
        if (
          changedFields.includes("awayTeam") &&
          existingItem.homeTeamId == resolvedData.awayTeam
        ) {
          return addValidationError("Teams must be different");
        }
      }
      //we are creating a game
      else {
        if (resolvedData.homeTeam === resolvedData.awayTeam) {
          return addValidationError("Teams must be different");
        }
      }
    },
    //after winner is changed
    // 1. Go to each Pick where gameId equals this game
    // 2. If team picked === game winner, toggle isCorrect to true
    afterChange: async ({ context, originalInput, updatedItem }) => {
      const changedFields = Object.keys(originalInput);
      if (changedFields.includes("winner")) {
        const picksForThisGame = await context.lists.Pick.findMany({
          where: { game: { id: {equals: updatedItem.id} } },
          resolveFields: "id,picked{id}",
        });

        picksForThisGame.map(async (pick) => {
          if (pick.picked.id == updatedItem.winnerId) {
            return await context.lists.Pick.updateOne({
              where: { id:  pick.id},
              data: { isCorrect: true },
            });
          } else if (pick.picked.id != updatedItem.winnerId) {
            return await context.lists.Pick.updateOne({
              where: {id: pick.id},
              data: { isCorrect: false },
            });
          }
        });
      }
    },
  },
});
