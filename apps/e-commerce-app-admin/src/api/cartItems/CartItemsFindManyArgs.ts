import { CartItemsWhereInput } from "./CartItemsWhereInput";
import { CartItemsOrderByInput } from "./CartItemsOrderByInput";

export type CartItemsFindManyArgs = {
  where?: CartItemsWhereInput;
  orderBy?: Array<CartItemsOrderByInput>;
  skip?: number;
  take?: number;
};
