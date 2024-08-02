import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";
import { Visit } from "../visit/Visit";
import { Wishlist } from "../wishlist/Wishlist";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  listings?: Array<Listing>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  visits?: Array<Visit>;
  wishlists?: Array<Wishlist>;
};
