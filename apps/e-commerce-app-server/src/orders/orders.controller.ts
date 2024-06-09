import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrdersService } from "./orders.service";
import { OrdersControllerBase } from "./base/orders.controller.base";

@swagger.ApiTags("orders")
@common.Controller("orders")
export class OrdersController extends OrdersControllerBase {
  constructor(protected readonly service: OrdersService) {
    super(service);
  }
}
