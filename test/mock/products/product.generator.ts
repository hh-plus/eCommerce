import { Product } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

export class ProductGenerator {
  private products: Product[] = [];

  constructor(count: number) {
    for (let i = 0; i < count; i++) {
      this.products.push({
        id: i,
        name: `product${i}`,
        price: i,
        quantity: i * 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
  }

  get getProducts(): Product[] {
    return this.products;
  }

  get getProductIds(): number[] {
    return this.products.map((product) => product.id);
  }

  async insertProductToDB(prismaService: PrismaService) {
    await prismaService.product.createMany({
      data: this.products,
    });
  }
}
