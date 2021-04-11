import { graphQLSchemaExtension } from "@keystone-next/keystone/schema";
import incrementCorrectPicks from "./incrementCorrectPicks";
// import addToCart from './addToCart';
// import checkout from './checkout';

// make a fake graphql tagged template literal
const graphql = String.raw;
export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type Mutation {
      incrementCorrectPicks(playerId: ID!, season: String!): Player
    }
  `,
  resolvers: {
    Mutation: {
      incrementCorrectPicks,
    },
  },
});
