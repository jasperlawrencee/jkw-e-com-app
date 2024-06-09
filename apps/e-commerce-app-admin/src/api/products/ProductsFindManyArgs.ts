import { ProductsWhereInput } from "./ProductsWhereInput";
import { ProductsOrderByInput } from "./ProductsOrderByInput";

export type ProductsFindManyArgs = {
  where?: ProductsWhereInput;
  orderBy?: Array<ProductsOrderByInput>;
  skip?: number;
  take?: number;
};
