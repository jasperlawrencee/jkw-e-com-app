import { Module } from "@nestjs/common";
import { CustomizablePcPiecesModuleBase } from "./base/customizablePcPieces.module.base";
import { CustomizablePcPiecesService } from "./customizablePcPieces.service";
import { CustomizablePcPiecesController } from "./customizablePcPieces.controller";
import { CustomizablePcPiecesResolver } from "./customizablePcPieces.resolver";

@Module({
  imports: [CustomizablePcPiecesModuleBase],
  controllers: [CustomizablePcPiecesController],
  providers: [CustomizablePcPiecesService, CustomizablePcPiecesResolver],
  exports: [CustomizablePcPiecesService],
})
export class CustomizablePcPiecesModule {}
