import { INestApplication, Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PrismaClient } from '@prisma/client'
import { Role } from '@vegetables-shop-backend/models'

@Injectable()
export class RepositoryService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly defaultAdmin: { email: string; password: string }
  constructor(private readonly config: ConfigService) {
    super()
    this.defaultAdmin = this.config.get('admin')
  }

  async onModuleInit() {
    await this.$connect()
    await this.ensureAdminUser()
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close()
    })
  }

  private async ensureAdminUser() {
    const found = await this.user.findUnique({ where: { email: this.defaultAdmin.email } })

    if (found) {
      Logger.log(`Admin user: ${found.email}`, 'DataService')
      return true
    }

    const admin = { ...this.defaultAdmin, role: Role.ADMIN }
    const created = await this.user.create({ data: admin })

    Logger.log(`Created Admin user: ${created.email}`, 'DataService')
  }
}
