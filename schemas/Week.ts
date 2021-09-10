import { list } from "@keystone-next/keystone";
import { text, relationship } from "@keystone-next/keystone/fields";
import { deleteManyBeforeDeleteHook } from "../utils/cascadeDelete";

export const Week = list({
  fields: {
    label: text({ isRequired: true }),
    slug: text({ isRequired: true}),
    season: text({ isRequired: true }),
    games: relationship({
      ref: "Game.week",
      many: true,
      hooks: {
        beforeDelete: deleteManyBeforeDeleteHook({ ref: "Game" }),
      },
    }),
  },
});
