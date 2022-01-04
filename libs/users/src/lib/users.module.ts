import { Module } from '@nestjs/common'
import { RepositoryModule } from '@vegetables-shop-backend/repository'

import { UsersService } from './services/users.service'

@Module({
  imports: [RepositoryModule],
  providers: [UsersService],
})
export class UsersModule {}
