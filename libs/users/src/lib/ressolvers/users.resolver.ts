import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'
import { UsersService } from '../services/users.service'
import { IndividualClientInput } from '@vegetables-shop-backend/models'

@Resolver('User')
export class UserResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createIndividualClient')
  async create(@Args('input') args: IndividualClientInput) {
    return this.usersService.createIndividualUser(args)
  }

  @Query('findByEmail')
  async findByEmail(@Args('input') args: string) {
    return this.usersService.findByEmail(args)
  }

  @Query('findById')
  async findById(@Args('input') args: string) {
    return this.usersService.findById(args)
  }
}
