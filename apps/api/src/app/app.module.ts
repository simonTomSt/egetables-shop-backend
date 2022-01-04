import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'

import { ClientsModule } from '@vegetables-shop-backend/clients'
import { CoreModule } from '@vegetables-shop-backend/core'
import { RepositoryModule } from '@vegetables-shop-backend/repository'
import { UsersModule } from '@vegetables-shop-backend/users'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    CoreModule,
    RepositoryModule,
    UsersModule,
    ClientsModule,
    GraphQLModule.forRoot({
      typePaths: ['../../../../libs/**/*.gql', '../../../../apps/**/*.gql'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
