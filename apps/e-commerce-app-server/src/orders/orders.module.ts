import { Module } from "@nestjs/common";
import { OrdersModuleBase } from "./base/orders.module.base";
import { OrdersService } from "./orders.service";
import { OrdersController } from "./orders.controller";
import { OrdersResolver } from "./orders.resolver";

@Module({
  imports: [OrdersModuleBase],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersResolver],
  exports: [OrdersService],
})
export class OrdersModule {}
