import { list } from "@keystone-next/keystone/schema";
import { text, password, relationship, integer } from "@keystone-next/fields";

export const Player = list({
  // access:
  // ui
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    picks: relationship({
      ref: "Pick.player",
      many: true,
    }),
    // TODO, add roles
  },
});
