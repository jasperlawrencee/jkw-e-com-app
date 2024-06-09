import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrdersServiceBase } from "./base/orders.service.base";

@Injectable()
export class OrdersService extends OrdersServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
