import { list } from "@keystone-next/keystone/schema";
import { checkbox, relationship } from "@keystone-next/fields";

export const Pick = list({
  fields: {
    player: relationship({
      ref: "Player.picks",
      many: false,
    }),
    game: relationship({
      ref: "Game.picks",
      many: false,
    }),
    picked: relationship({
      ref: "Team",
      many: false,
    }),
    isCorrect: checkbox({
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
