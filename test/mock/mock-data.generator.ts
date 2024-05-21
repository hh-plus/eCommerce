import { PrismaService } from 'prisma/prisma.service';
import { UserGenerator } from './users/user.generator';
import { ProductGenerator } from './products/product.generator';
import { ProductUserGenerator } from './products/product-user.generator';

export const exec = async () => {
  const prismaService = new PrismaService();

  const mockUsers = new UserGenerator(300);
  await mockUsers.insertUserToDB(prismaService);

  const mockProducts = new ProductGenerator(300);
  await mockProducts.insertProductToDB(prismaService);

  await Promise.all(
    mockProducts.getProductIds.slice(0, 10).map(async (productId) => {
      await ProductUserGenerator.insertProductUserToDB(
        productId,
        mockUsers.getUserIds,
        prismaService,
      );
    }),
  );

  await prismaService.$disconnect();
};
