import { CategoriesWhereInput } from "./CategoriesWhereInput";
import { CategoriesOrderByInput } from "./CategoriesOrderByInput";

export type CategoriesFindManyArgs = {
  where?: CategoriesWhereInput;
  orderBy?: Array<CategoriesOrderByInput>;
  skip?: number;
  take?: number;
};
