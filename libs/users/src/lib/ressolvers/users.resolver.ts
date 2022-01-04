import { Args, Query, Resolver } from '@nestjs/graphql'
import { UsersService } from '../services/users.service'

@Resolver('User')
export class UserResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('findByEmail')
  async findByEmail(@Args('input') args: string) {
    return this.usersService.findByEmail(args)
  }

  @Query('findById')
  async findById(@Args('input') args: string) {
    return this.usersService.findById(args)
  }
}
