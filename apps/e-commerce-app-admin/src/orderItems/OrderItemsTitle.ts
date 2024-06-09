import { OrderItems as TOrderItems } from "../api/orderItems/OrderItems";

export const ORDERITEMS_TITLE_FIELD = "id";

export const OrderItemsTitle = (record: TOrderItems): string => {
  return record.id?.toString() || String(record.id);
};
