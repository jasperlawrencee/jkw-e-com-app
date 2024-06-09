import { CartItems as TCartItems } from "../api/cartItems/CartItems";

export const CARTITEMS_TITLE_FIELD = "id";

export const CartItemsTitle = (record: TCartItems): string => {
  return record.id?.toString() || String(record.id);
};
