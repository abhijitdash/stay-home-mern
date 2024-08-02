import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { Visit } from "../visit/Visit";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  description: string;
  id: string;
  listingCreatedBy?: User;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  pictures: JsonValue;
  placeAmenities: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  price: number;
  title: string;
  updatedAt: Date;
  visits?: Array<Visit>;
  wishlists?: Array<Wishlist>;
};
