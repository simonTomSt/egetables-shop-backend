import { Module } from '@nestjs/common'
import { RepositoryModule } from '@vegetables-shop-backend/repository'

import { BusinessClientsService } from './services/business-clients.service'
import { IndividualClientsService } from './services/individual-clients.service'

@Module({
  imports: [RepositoryModule],
  controllers: [],
  providers: [IndividualClientsService, BusinessClientsService],
  exports: [IndividualClientsService],
})
export class ClientsModule {}
