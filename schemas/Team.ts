import { list } from "@keystone-next/keystone";
import { text } from "@keystone-next/keystone/fields";

export const Team = list({
  fields: {
    name: text({ isRequired: true, isFilterable: true, isOrderable: true }),
    city: text({ isRequired: true, isFilterable: true, isOrderable: true }),
    abbreviation: text(),
    conference: text(),
    division: text(),
  },
});
