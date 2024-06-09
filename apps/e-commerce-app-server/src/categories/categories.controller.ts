import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CategoriesService } from "./categories.service";
import { CategoriesControllerBase } from "./base/categories.controller.base";

@swagger.ApiTags("categories")
@common.Controller("categories")
export class CategoriesController extends CategoriesControllerBase {
  constructor(protected readonly service: CategoriesService) {
    super(service);
  }
}
