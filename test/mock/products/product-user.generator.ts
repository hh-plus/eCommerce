import { PrismaService } from 'prisma/prisma.service';

export class ProductUserGenerator {
  static async insertProductUserToDB(
    productId: number,
    userIds: number[],
    prismaService: PrismaService,
  ) {
    const product = await prismaService.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new Error(`Product with id ${productId} not found`);
    }

    // product의 qunatity 만큼 userIds 자르기
    userIds = userIds.slice(0, product.quantity);

    await prismaService.productUser.createMany({
      data: userIds.map((userId) => ({
        productId,
        userId,
      })),
    });
  }
}
