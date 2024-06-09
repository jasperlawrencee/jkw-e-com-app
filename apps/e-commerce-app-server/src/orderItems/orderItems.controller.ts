import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrderItemsService } from "./orderItems.service";
import { OrderItemsControllerBase } from "./base/orderItems.controller.base";

@swagger.ApiTags("orderItems")
@common.Controller("orderItems")
export class OrderItemsController extends OrderItemsControllerBase {
  constructor(protected readonly service: OrderItemsService) {
    super(service);
  }
}
