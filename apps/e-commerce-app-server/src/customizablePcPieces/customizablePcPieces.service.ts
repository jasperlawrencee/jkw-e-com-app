import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomizablePcPiecesServiceBase } from "./base/customizablePcPieces.service.base";

@Injectable()
export class CustomizablePcPiecesService extends CustomizablePcPiecesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
