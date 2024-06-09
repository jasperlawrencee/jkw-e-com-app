import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomizablePcPiecesService } from "./customizablePcPieces.service";
import { CustomizablePcPiecesControllerBase } from "./base/customizablePcPieces.controller.base";

@swagger.ApiTags("customizablePcPieces")
@common.Controller("customizablePcPieces")
export class CustomizablePcPiecesController extends CustomizablePcPiecesControllerBase {
  constructor(protected readonly service: CustomizablePcPiecesService) {
    super(service);
  }
}
