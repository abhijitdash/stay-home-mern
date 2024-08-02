import { ListingCreateNestedManyWithoutUsersInput } from "./ListingCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { VisitCreateNestedManyWithoutUsersInput } from "./VisitCreateNestedManyWithoutUsersInput";
import { WishlistCreateNestedManyWithoutUsersInput } from "./WishlistCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  listings?: ListingCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
  visits?: VisitCreateNestedManyWithoutUsersInput;
  wishlists?: WishlistCreateNestedManyWithoutUsersInput;
};
