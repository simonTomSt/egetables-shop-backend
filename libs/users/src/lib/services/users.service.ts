import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'

import { IndividualClientsService } from '@vegetables-shop-backend/clients'
import { IndividualClientInput, UserInput } from '@vegetables-shop-backend/models'
import { RepositoryService } from '@vegetables-shop-backend/repository'

@Injectable()
export class UsersService {
  constructor(private repository: RepositoryService, private individualClientsService: IndividualClientsService) {}

  createIndividualUser(input: IndividualClientInput): Promise<User> {
    return this.individualClientsService.create(input)
  }

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
