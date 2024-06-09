import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CartItemsServiceBase } from "./base/cartItems.service.base";

@Injectable()
export class CartItemsService extends CartItemsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
