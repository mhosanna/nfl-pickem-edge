import { graphQLSchemaExtension } from "@keystone-next/keystone/schema";
import incrementCorrectPicks from "./incrementCorrectPicks";
import upsertPicks from "./upsertPicks";

// make a fake graphql tagged template literal
const graphql = String.raw;
export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type Mutation {
      incrementCorrectPicks(playerId: ID!, season: String!): Player
      upsertPicks(playerId: ID!, gameId: ID!, teamId: ID!): Pick
    }
  `,
  resolvers: {
    Mutation: {
      incrementCorrectPicks,
      upsertPicks,
    },
  },
});
