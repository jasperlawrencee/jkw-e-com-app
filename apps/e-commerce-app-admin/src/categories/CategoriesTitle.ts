import { Categories as TCategories } from "../api/categories/Categories";

export const CATEGORIES_TITLE_FIELD = "id";

export const CategoriesTitle = (record: TCategories): string => {
  return record.id?.toString() || String(record.id);
};
