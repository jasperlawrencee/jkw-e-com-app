import { OrderItemsWhereInput } from "./OrderItemsWhereInput";
import { OrderItemsOrderByInput } from "./OrderItemsOrderByInput";

export type OrderItemsFindManyArgs = {
  where?: OrderItemsWhereInput;
  orderBy?: Array<OrderItemsOrderByInput>;
  skip?: number;
  take?: number;
};
