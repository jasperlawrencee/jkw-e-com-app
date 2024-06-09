import * as graphql from "@nestjs/graphql";
import { CustomizablePcPiecesResolverBase } from "./base/customizablePcPieces.resolver.base";
import { CustomizablePcPieces } from "./base/CustomizablePcPieces";
import { CustomizablePcPiecesService } from "./customizablePcPieces.service";

@graphql.Resolver(() => CustomizablePcPieces)
export class CustomizablePcPiecesResolver extends CustomizablePcPiecesResolverBase {
  constructor(protected readonly service: CustomizablePcPiecesService) {
    super(service);
  }
}
