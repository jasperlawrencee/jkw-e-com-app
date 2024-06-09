import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CartItemsService } from "./cartItems.service";
import { CartItemsControllerBase } from "./base/cartItems.controller.base";

@swagger.ApiTags("cartItems")
@common.Controller("cartItems")
export class CartItemsController extends CartItemsControllerBase {
  constructor(protected readonly service: CartItemsService) {
    super(service);
  }
}
