import { Game } from "./schemas/Game";
import { Pick } from "./schemas/Pick";
import { Team } from "./schemas/Team";
import { Player } from "./schemas/Player";
import { Week } from "./schemas/Week";
import { config, createSchema } from "@keystone-next/keystone/schema";
import { statelessSessions } from "@keystone-next/keystone/session";
import { createAuth } from "@keystone-next/auth";
import "dotenv/config";
import { insertSeedData } from "./seed-data";
import { extendGraphqlSchema } from "./mutations";

let sessionMaxAge = 60 * 60 * 24 * 360; // one year

const sessionConfig = {
  maxAge: sessionMaxAge, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET || "-- DEV COOKIE SECRET; CHANGE ME --",
  domain: process.env.SESSION_DOMAIN
};

const { withAuth } = createAuth({
  listKey: "Player",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
  sessionData: "id name email",
});

export default withAuth(
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
      async onConnect(context) {
        console.log("Connected to the database!");
        if (process.argv.includes("--seed-data")) {
          await insertSeedData(context);
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
      Week,
    }),
    extendGraphqlSchema,
    session: statelessSessions(sessionConfig),
  })
);
