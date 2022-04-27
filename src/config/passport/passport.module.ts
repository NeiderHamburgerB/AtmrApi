import { Module } from "@nestjs/common"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { JwtModule } from '@nestjs/jwt'

@Module({
    imports:[
        JwtModule.registerAsync({
            imports:[ConfigModule],
            inject:[ConfigService],
            useFactory: async(config:ConfigService) => ({
                secret: config.get('JWT_SECRET'),
                signOptions:{
                    expiresIn:'24h'
                }
            })
        })
    ],
    exports:[JwtModule]
})
export class PassportModule {}