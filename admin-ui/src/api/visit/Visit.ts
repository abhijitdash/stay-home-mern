import { Listing } from "../listing/Listing";
import { User } from "../user/User";
import { JsonValue } from "type-fest";

export type Visit = {
  createdAt: Date;
  id: string;
  listing?: Listing;
  updatedAt: Date;
  user?: User;
  visitDetails: JsonValue;
};
