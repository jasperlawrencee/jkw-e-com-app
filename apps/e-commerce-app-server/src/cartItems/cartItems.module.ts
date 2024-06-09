import { Module } from "@nestjs/common";
import { CartItemsModuleBase } from "./base/cartItems.module.base";
import { CartItemsService } from "./cartItems.service";
import { CartItemsController } from "./cartItems.controller";
import { CartItemsResolver } from "./cartItems.resolver";

@Module({
  imports: [CartItemsModuleBase],
  controllers: [CartItemsController],
  providers: [CartItemsService, CartItemsResolver],
  exports: [CartItemsService],
})
export class CartItemsModule {}
