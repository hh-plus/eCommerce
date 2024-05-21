import { User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

export class UserGenerator {
  private users: User[] = [];

  constructor(count: number) {
    for (let i = 0; i < count; i++) {
      this.users.push({
        id: i,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
  }

  get getUsers(): User[] {
    return this.users;
  }

  get getUserIds(): number[] {
    return this.users.map((user) => user.id);
  }

  async insertUserToDB(prismaService: PrismaService) {
    await prismaService.user.createMany({
      data: this.users,
    });
  }
}
