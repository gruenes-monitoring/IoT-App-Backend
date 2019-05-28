
import { mergeTypes } from "merge-graphql-schemas";

import Measurement from "./Measurement/";
import Device from "./Device/";

const typeDefs = [Measurement, Device];

export default mergeTypes(typeDefs, { all: true });
