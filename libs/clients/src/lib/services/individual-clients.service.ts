import { Injectable } from '@nestjs/common'
import { IndividualClient, IndividualClientInput, Role } from '@vegetables-shop-backend/models'
import { RepositoryService } from '@vegetables-shop-backend/repository'

@Injectable()
export class IndividualClientsService {
  constructor(private repository: RepositoryService) {}

  create(input: IndividualClientInput): Promise<IndividualClient> {
    return this.repository.user.create({ data: { ...input, role: Role.INDIVIDUAL_CLIENT } })
  }
}
