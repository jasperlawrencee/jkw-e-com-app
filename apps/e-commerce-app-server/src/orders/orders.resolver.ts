import * as graphql from "@nestjs/graphql";
import { OrdersResolverBase } from "./base/orders.resolver.base";
import { Orders } from "./base/Orders";
import { OrdersService } from "./orders.service";

@graphql.Resolver(() => Orders)
export class OrdersResolver extends OrdersResolverBase {
  constructor(protected readonly service: OrdersService) {
    super(service);
  }
}
