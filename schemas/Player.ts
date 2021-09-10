import { list } from "@keystone-next/keystone";
import { text, password, relationship } from "@keystone-next/keystone/fields";
import { deleteManyBeforeDeleteHook } from "../utils/cascadeDelete";

export const Player = list({
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isIndexed: "unique", isFilterable: true }),
    password: password(),
    picks: relationship({
      ref: "Pick.player",
      many: true,
      hooks: {
        beforeDelete: deleteManyBeforeDeleteHook({ref: "Pick"}),
      },
    }),
    // TODO, add roles
  },
});
