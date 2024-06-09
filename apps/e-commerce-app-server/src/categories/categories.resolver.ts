import * as graphql from "@nestjs/graphql";
import { CategoriesResolverBase } from "./base/categories.resolver.base";
import { Categories } from "./base/Categories";
import { CategoriesService } from "./categories.service";

@graphql.Resolver(() => Categories)
export class CategoriesResolver extends CategoriesResolverBase {
  constructor(protected readonly service: CategoriesService) {
    super(service);
  }
}
