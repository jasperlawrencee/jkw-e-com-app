import { CustomizablePcPiecesWhereInput } from "./CustomizablePcPiecesWhereInput";
import { CustomizablePcPiecesOrderByInput } from "./CustomizablePcPiecesOrderByInput";

export type CustomizablePcPiecesFindManyArgs = {
  where?: CustomizablePcPiecesWhereInput;
  orderBy?: Array<CustomizablePcPiecesOrderByInput>;
  skip?: number;
  take?: number;
};
