import * as graphql from "@nestjs/graphql";
import { ProductsResolverBase } from "./base/products.resolver.base";
import { Products } from "./base/Products";
import { ProductsService } from "./products.service";

@graphql.Resolver(() => Products)
export class ProductsResolver extends ProductsResolverBase {
  constructor(protected readonly service: ProductsService) {
    super(service);
  }
}
