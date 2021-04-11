import { Game } from "./schemas/Game";
import { Pick } from "./schemas/Pick";
import { Team } from "./schemas/Team";
import { Player } from "./schemas/Player";
import { config, createSchema } from "@keystone-next/keystone/schema";
import {
  statelessSessions,
  withItemData,
} from "@keystone-next/keystone/session";
import { createAuth } from "@keystone-next/auth";
import "dotenv/config";

import { lists } from "./schema";
import { insertSeedData } from "./seed-data";
import { extendGraphqlSchema } from "./mutations";

let sessionMaxAge = 60 * 60 * 24 * 360; // one year

const sessionConfig = {
  maxAge: sessionMaxAge, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const auth = createAuth({
  listKey: "Player",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

export default auth.withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: "prisma_postgresql",
      url: process.env.DATABASE_URL || "postgres://localhost/nfl-pickem-db",
      async onConnect(keystone) {
        console.log("Connected to the database!");
        if (process.argv.includes("--seed-data")) {
          await insertSeedData(keystone);
        }
      },
    },
    ui: {
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    lists: createSchema({
      Player,
      Team,
      Game,
      Pick,
    }),
    extendGraphqlSchema,
    session: withItemData(statelessSessions(sessionConfig), {
      // GraphQL Query
      Player: "id name email",
    }),
  })
);
