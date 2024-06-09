import { Module } from "@nestjs/common";
import { OrderItemsModuleBase } from "./base/orderItems.module.base";
import { OrderItemsService } from "./orderItems.service";
import { OrderItemsController } from "./orderItems.controller";
import { OrderItemsResolver } from "./orderItems.resolver";

@Module({
  imports: [OrderItemsModuleBase],
  controllers: [OrderItemsController],
  providers: [OrderItemsService, OrderItemsResolver],
  exports: [OrderItemsService],
})
export class OrderItemsModule {}
