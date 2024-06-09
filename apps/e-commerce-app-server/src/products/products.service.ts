import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductsServiceBase } from "./base/products.service.base";

@Injectable()
export class ProductsService extends ProductsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
