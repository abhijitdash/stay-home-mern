import { SortOrder } from "../../util/SortOrder";

export type VisitOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  listingId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  visitDetails?: SortOrder;
};
