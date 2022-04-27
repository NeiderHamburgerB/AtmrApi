import { Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { UserService } from "src/routes/user/user.service"

@Injectable()
export class jwtService extends PassportStrategy(Strategy){

    constructor(private config:ConfigService, private userService:UserService){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:config.get('JWT_SECRET')
        })
    }

    async validate(payload: { sub: any }){
        const { sub: _id } = payload
        return await this.userService.one({_id}, false)
    }


}