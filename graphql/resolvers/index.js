import { mergeResolvers } from "merge-graphql-schemas";

import Device from "./Device/";
import Measurement from "./Measurement/";

const resolvers = [Device,Measurement];

export default mergeResolvers(resolvers);
