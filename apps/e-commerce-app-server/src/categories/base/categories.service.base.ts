/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Categories as PrismaCategories } from "@prisma/client";

export class CategoriesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CategoriesCountArgs, "select">
  ): Promise<number> {
    return this.prisma.categories.count(args);
  }

  async categoriesItems<T extends Prisma.CategoriesFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoriesFindManyArgs>
  ): Promise<PrismaCategories[]> {
    return this.prisma.categories.findMany<Prisma.CategoriesFindManyArgs>(args);
  }
  async categories<T extends Prisma.CategoriesFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoriesFindUniqueArgs>
  ): Promise<PrismaCategories | null> {
    return this.prisma.categories.findUnique(args);
  }
  async createCategories<T extends Prisma.CategoriesCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoriesCreateArgs>
  ): Promise<PrismaCategories> {
    return this.prisma.categories.create<T>(args);
  }
  async updateCategories<T extends Prisma.CategoriesUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoriesUpdateArgs>
  ): Promise<PrismaCategories> {
    return this.prisma.categories.update<T>(args);
  }
  async deleteCategories<T extends Prisma.CategoriesDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoriesDeleteArgs>
  ): Promise<PrismaCategories> {
    return this.prisma.categories.delete(args);
  }
}