import { Resolver, Mutation, Args } from '@nestjs/graphql'
import { IndividualClientInput } from '@vegetables-shop-backend/models'
import { IndividualClientsService } from '../services/individual-clients.service'

@Resolver('IndividualClient')
export class AuthResolver {
  constructor(private readonly individualClientsService: IndividualClientsService) {}

  @Mutation('createIndividualClient')
  async createIndividualClient(@Args('input') args: IndividualClientInput) {
    return this.individualClientsService.create(args)
  }
}
