import { list } from "@keystone-next/keystone/schema";
import { text, relationship } from "@keystone-next/fields";

export const Team = list({
  fields: {
    name: text({ isRequired: true }),
    city: text({ isRequired: true }),
    abbreviation: text(),
    conference: text(),
    division: text(),
    //TODO: add games relationship
  },
});
