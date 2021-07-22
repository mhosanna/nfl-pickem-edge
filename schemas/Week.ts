import { list } from "@keystone-next/keystone/schema";
import { text, relationship } from "@keystone-next/fields";

export const Week = list({
  fields: {
    label: text({ isRequired: true }),
    slug: text({ isRequired: true, isUnique: true }),
    season: text({ isRequired: true }),
    games: relationship({
      ref: "Game.week",
      many: true,
    }),
  },
});
