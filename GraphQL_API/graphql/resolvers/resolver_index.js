import { mergeResolvers } from "merge-graphql-schemas";

import Device from "./Device/resolver_Device";
import Measurement from "./Measurement/resolver_Measurement";

const resolvers = [Device,Measurement];

export default mergeResolvers(resolvers);
