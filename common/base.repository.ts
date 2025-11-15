import { PrismaService } from 'prisma/prisma.service';

export class BaseRepository<T, CreateDto = any, UpdateDto = any> {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly model: any,
  ) {}

  create(data: CreateDto, include?: any): Promise<T> {
    return this.model.create({ data, include });
  }

  findAll(
    params?: { skip?: number; take?: number; where?: any; orderBy?: any },
    include?: any,
  ): Promise<T[]> {
    return this.model.findMany({ ...params, include });
  }

  findOne(id: number, include?: any): Promise<T | null> {
    return this.model.findUnique({
      where: { id },
      include,
    });
  }

  update(id: number, data: Partial<UpdateDto>, include?: any): Promise<T> {
    return this.model.update({
      where: { id },
      data,
      include,
    });
  }

  remove(id: number, include?: any): Promise<T> {
    return this.model.delete({
      where: { id },
      include,
    });
  }
}
