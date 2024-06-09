import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CategoriesServiceBase } from "./base/categories.service.base";

@Injectable()
export class CategoriesService extends CategoriesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
