import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type VisitCreateInput = {
  listing: ListingWhereUniqueInput;
  user: UserWhereUniqueInput;
  visitDetails: InputJsonValue;
};
