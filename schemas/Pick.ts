import { list } from "@keystone-next/keystone";
import { checkbox, relationship } from "@keystone-next/keystone/fields";

export const Pick = list({
  fields: {
    player: relationship({
      isFilterable: true,
      ref: "Player.picks",
      many: false,
    }),
    game: relationship({
      isFilterable: true,
      ref: "Game.picks",
      many: false,
    }),
    picked: relationship({
      ref: "Team",
      many: false,
    }),
    isCorrect: checkbox({
      isFilterable: true,
      defaultValue: false,
      ui: {
        itemView: { fieldMode: "read" },
        createView: { fieldMode: "hidden" },
      },
    }),
    //TODO: add  unique constraints?
  },
  ui: {
    listView: {
      initialColumns: ["player", "picked", "game", "isCorrect"],
    },
  },
});
