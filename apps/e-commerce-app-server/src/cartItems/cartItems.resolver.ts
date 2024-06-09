import * as graphql from "@nestjs/graphql";
import { CartItemsResolverBase } from "./base/cartItems.resolver.base";
import { CartItems } from "./base/CartItems";
import { CartItemsService } from "./cartItems.service";

@graphql.Resolver(() => CartItems)
export class CartItemsResolver extends CartItemsResolverBase {
  constructor(protected readonly service: CartItemsService) {
    super(service);
  }
}
