import { Module } from "@nestjs/common";
import { ProductsModuleBase } from "./base/products.module.base";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { ProductsResolver } from "./products.resolver";

@Module({
  imports: [ProductsModuleBase],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsResolver],
  exports: [ProductsService],
})
export class ProductsModule {}
