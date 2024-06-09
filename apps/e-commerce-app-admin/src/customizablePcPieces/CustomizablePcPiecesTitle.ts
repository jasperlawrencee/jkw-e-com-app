import { CustomizablePcPieces as TCustomizablePcPieces } from "../api/customizablePcPieces/CustomizablePcPieces";

export const CUSTOMIZABLEPCPIECES_TITLE_FIELD = "id";

export const CustomizablePcPiecesTitle = (
  record: TCustomizablePcPieces
): string => {
  return record.id?.toString() || String(record.id);
};
