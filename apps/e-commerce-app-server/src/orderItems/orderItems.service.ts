import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrderItemsServiceBase } from "./base/orderItems.service.base";

@Injectable()
export class OrderItemsService extends OrderItemsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
