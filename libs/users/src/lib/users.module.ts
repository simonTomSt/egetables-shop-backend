import { Module } from '@nestjs/common'
import { ClientsModule } from '@vegetables-shop-backend/clients'
import { RepositoryModule } from '@vegetables-shop-backend/repository'

import { UserResolver } from './ressolvers/users.resolver'
import { UsersService } from './services/users.service'

@Module({
  imports: [RepositoryModule, ClientsModule],
  providers: [UserResolver, UsersService],
})
export class UsersModule {}
