import { Products as TProducts } from "../api/products/Products";

export const PRODUCTS_TITLE_FIELD = "id";

export const ProductsTitle = (record: TProducts): string => {
  return record.id?.toString() || String(record.id);
};
