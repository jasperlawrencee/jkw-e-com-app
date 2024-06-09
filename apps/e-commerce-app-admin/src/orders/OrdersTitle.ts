import { Orders as TOrders } from "../api/orders/Orders";

export const ORDERS_TITLE_FIELD = "id";

export const OrdersTitle = (record: TOrders): string => {
  return record.id?.toString() || String(record.id);
};
