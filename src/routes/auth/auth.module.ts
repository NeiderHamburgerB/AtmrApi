import { Module } from '@nestjs/common'
import { UserModule } from '../user/user.module'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { LocalService } from 'src/config/passport/strategies/local.service'
import { jwtService } from 'src/config/passport/strategies/jwt.service'
import { PassportModule } from 'src/config/passport/passport.module'

@Module({
  imports:[
    UserModule, 
    PassportModule
  ],
  providers: [AuthService, LocalService, jwtService],
  controllers: [AuthController]
})
export class AuthModule {}
