import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'

import { UserInput } from '@vegetables-shop-backend/models'
import { RepositoryService } from '@vegetables-shop-backend/repository'

@Injectable()
export class UsersService {
  constructor(private repository: RepositoryService) {}

  create(input: UserInput): Promise<User> {
    return this.repository.user.create({ data: input })
  }

  findByEmail(email: string): Promise<User> {
    return this.repository.user.findUnique({ where: { email } })
  }

  findById(userId: string): Promise<User> {
    return this.repository.user.findUnique({ where: { id: userId } })
  }
}
