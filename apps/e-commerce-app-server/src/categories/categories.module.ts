import { Module } from "@nestjs/common";
import { CategoriesModuleBase } from "./base/categories.module.base";
import { CategoriesService } from "./categories.service";
import { CategoriesController } from "./categories.controller";
import { CategoriesResolver } from "./categories.resolver";

@Module({
  imports: [CategoriesModuleBase],
  controllers: [CategoriesController],
  providers: [CategoriesService, CategoriesResolver],
  exports: [CategoriesService],
})
export class CategoriesModule {}
