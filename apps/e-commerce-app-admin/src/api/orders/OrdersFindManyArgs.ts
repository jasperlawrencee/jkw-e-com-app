import { OrdersWhereInput } from "./OrdersWhereInput";
import { OrdersOrderByInput } from "./OrdersOrderByInput";

export type OrdersFindManyArgs = {
  where?: OrdersWhereInput;
  orderBy?: Array<OrdersOrderByInput>;
  skip?: number;
  take?: number;
};
