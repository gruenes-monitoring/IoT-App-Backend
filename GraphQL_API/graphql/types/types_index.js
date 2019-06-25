
import { mergeTypes } from "merge-graphql-schemas";

import Measurement from "./Measurement/types_Measurement";
import Device from "./Device/types_Device";
const typeDefs = [Measurement, Device];
export default mergeTypes(typeDefs, { all: true });
