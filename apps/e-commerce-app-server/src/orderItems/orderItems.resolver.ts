import * as graphql from "@nestjs/graphql";
import { OrderItemsResolverBase } from "./base/orderItems.resolver.base";
import { OrderItems } from "./base/OrderItems";
import { OrderItemsService } from "./orderItems.service";

@graphql.Resolver(() => OrderItems)
export class OrderItemsResolver extends OrderItemsResolverBase {
  constructor(protected readonly service: OrderItemsService) {
    super(service);
  }
}
