import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseModule } from './config/database/database.module'
import { EnvironmentModule } from './config/environment/environments.module'
import { AuthModule } from './routes/auth/auth.module'
import { UserModule } from './routes/user/user.module'
import { ProductModule } from './routes/product/product.module';
import { RolesModule } from './config/roles/roles.module'

@Module({
  imports: [
    EnvironmentModule,
    DatabaseModule,
    RolesModule,
    AuthModule,
    UserModule,
    ProductModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
