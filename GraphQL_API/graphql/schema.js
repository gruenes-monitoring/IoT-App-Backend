import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "./types/types_index";
import resolvers from "./resolvers/resolver_index";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema
