import { list } from "@keystone-next/keystone";
import { text } from "@keystone-next/keystone/fields";

export const Team = list({
  fields: {
    name: text({ isRequired: true }),
    city: text({ isRequired: true }),
    abbreviation: text(),
    conference: text(),
    division: text(),
  },
});
